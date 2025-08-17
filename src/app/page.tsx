import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import PartnerBrands from "@/components/ui/partner-brands";
import { getCategories } from "@/data/categories/get";
import {
  getNewlyCreatedProducts,
  getProductsWithVariants,
} from "@/data/products/get";

const Home = async () => {
  const [products, newlyCreatedProducts, categories] = await Promise.all([
    getProductsWithVariants(),
    getNewlyCreatedProducts(),
    getCategories(),
  ]);
  return (
    <div>
      <div className="mx-auto max-w-[1440px] mb-8">
        <Header />
        <div className="space-y-16">
          <div className="px-5">
            <div className="px-5">
              {/* Mobile: aparece antes de sm */}
              <Image
                src="/mobile/mobile-banner-01.svg"
                alt="Leve uma vida com estilo"
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full md:hidden"
              />

              {/* Desktop: aparece a partir de sm */}
              <Image
                src="/desktop/desktop-banner-01.svg"
                alt="Leve uma vida com estilo"
                height={0}
                width={0}
                sizes="100vw"
                className="hidden h-auto w-full md:block"
              />
            </div>
          </div>

          <PartnerBrands />

          <ProductList products={products} title="Mais vendidos" />

          <div className="px-5 sm:hidden">
            <CategorySelector categories={categories} />
          </div>

          <div className="px-5">
            <div className="px-5">
              {/* Mobile: aparece antes de sm */}
              <Image
                src="/mobile/mobile-banner-02.svg"
                alt="Leve uma vida com estilo"
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full md:hidden"
              />

              {/* Desktop: aparece a partir de sm */}
              <div className="flex justify-center gap-3">
                <div className="flex flex-col gap-3">
                  <Image
                    src="/desktop/desktop-banner-03.svg"
                    alt="Leve uma vida com estilo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="hidden h-auto w-full md:block"
                  />

                  <Image
                    src="/desktop/desktop-banner-04.svg"
                    alt="Leve uma vida com estilo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="hidden h-auto w-full md:block"
                  />
                </div>
                <div className="">
                  <Image
                    src="/desktop/desktop-banner-02.svg"
                    alt="Leve uma vida com estilo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="hidden h-auto w-full md:block"
                  />
                </div>
              </div>
            </div>
          </div>

          <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
