import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { getCategories } from "@/data/categories/get";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

import ProductActions from "./components/product-actions";
import VariantSelector from "./components/variant-selector";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

const [categories] = await Promise.all([getCategories()]);

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
  const { slug } = await params;
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });
  if (!productVariant) {
    return notFound();
  }
  const likelyProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, productVariant.product.categoryId),
    with: {
      variants: true,
    },
  });
  return (
    <>
      <Header />
      <div className="mb-2.5 hidden justify-around border-b-1 p-5 font-semibold md:flex">
        <CategorySelector categories={categories} />
      </div>

      {/*mobile*/}
      <div className="md:hidden">
        <div className="flex flex-col space-y-6">
          <Image
            src={productVariant.imageUrl}
            alt={productVariant.name}
            sizes="100vw"
            height={0}
            width={0}
            className="h-auto w-full object-cover"
          />

          <div className="px-5">
            <VariantSelector
              selectedVariantSlug={productVariant.slug}
              variants={productVariant.product.variants}
            />
          </div>

          <div className="px-5">
            {/* DESCRIÇÃO */}
            <h2 className="text-lg font-semibold">
              {productVariant.product.name}
            </h2>
            <h3 className="text-muted-foreground text-sm">
              {productVariant.name}
            </h3>
            <h3 className="text-lg font-semibold">
              {formatCentsToBRL(productVariant.priceInCents)}
            </h3>
          </div>

          <ProductActions productVariantId={productVariant.id} />

          <div className="px-5">
            <p className="text-shadow-amber-600">
              {productVariant.product.description}
            </p>
          </div>

          <ProductList title="Talvez você goste" products={likelyProducts} />
        </div>
      </div>

      {/*desktop*/}
      <div className="mx-auto hidden max-w-5xl md:flex">
        <div className="m-3.5 flex flex-col space-y-6">
          <div className="grid grid-cols-2">
            <div>
              <Image
                src={productVariant.imageUrl}
                alt={productVariant.name}
                sizes="100vw"
                height={0}
                width={0}
                className="h-auto w-full object-cover rounded-2xl"
              />
            </div>

            <div>
              <div className="px-5">
                {/* DESCRIÇÃO */}
                <h2 className="text-lg font-semibold">
                  {productVariant.product.name}
                </h2>
                <h3 className="text-muted-foreground text-sm">
                  {productVariant.name}
                </h3>
                <h3 className="my-3.5 text-lg font-semibold">
                  {formatCentsToBRL(productVariant.priceInCents)}
                </h3>
              </div>

              <div className="px-5">
                <VariantSelector
                  selectedVariantSlug={productVariant.slug}
                  variants={productVariant.product.variants}
                />
              </div>

              <div className="my-4 px-5">
                <h3 className="text-md mb-2 font-semibold">
                  Selecionar Tamanho
                </h3>

                <div className="w-full">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {["P", "M", "G"].map((size) => (
                      <button
                        key={size}
                        className="rounded-md border px-10 py-2 text-sm font-medium transition hover:bg-purple-500"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {["GG", "GGG", "GGGG"].map((size) => (
                      <button
                        key={size}
                        className="rounded-md border px-7.5 py-2 text-sm font-medium transition hover:bg-purple-500"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <ProductActions productVariantId={productVariant.id} />

                  <div className="mt-3.5">
                    <p className="text-shadow-amber-600">
                      {productVariant.product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProductList title="Talvez você goste" products={likelyProducts} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductVariantPage;
