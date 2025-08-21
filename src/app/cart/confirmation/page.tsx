import { headers } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/db";
import { auth } from "@/lib/auth";

import CartSummary from "../components/cart-summary";
import { formatAddress } from "../helpers/address";
import FinishOrderButton from "./components/finish-order-button";

const ConfirmationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user.id) {
    redirect("/");
  }
  const cart = await db.query.cartTable.findFirst({
    where: (cart, { eq }) => eq(cart.userId, session.user.id),
    with: {
      shippingAddress: true,
      items: {
        with: {
          productVariant: {
            with: {
              product: true,
            },
          },
        },
      },
    },
  });
  if (!cart || cart?.items.length === 0) {
    redirect("/");
  }
  const cartTotalInCents = cart.items.reduce(
    (acc, item) => acc + item.productVariant.priceInCents * item.quantity,
    0,
  );
  if (!cart.shippingAddress) {
    redirect("/cart/identification");
  }
  return (
    <div className="flex min-h-screen flex-col">
      {/* HEADER FIXED */}
      <header className="top-0 left-0 w-full">
        <Header />
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-3.5 pb-20">
        <div className="mx-auto max-w-4xl space-y-4 px-5 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
          {/* Identification Card on the left (md+) */}
          <div className="order-1 md:col-start-1">
            <Card>
              <CardHeader>
                <CardTitle>Identificação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Card>
                  <CardContent>
                    <p className="text-sm">
                      {formatAddress(cart.shippingAddress)}
                    </p>
                  </CardContent>
                </Card>
                <FinishOrderButton />
              </CardContent>
            </Card>
          </div>

          {/* CartSummary on the right (md+) */}
          <div className="order-2 md:col-start-2">
            <CartSummary
              subtotalInCents={cartTotalInCents}
              totalInCents={cartTotalInCents}
              products={cart.items.map((item) => ({
                id: item.productVariant.id,
                name: item.productVariant.product.name,
                variantName: item.productVariant.name,
                quantity: item.quantity,
                priceInCents: item.productVariant.priceInCents,
                imageUrl: item.productVariant.imageUrl,
              }))}
            />
          </div>
        </div>
      </main>

      {/* FOOTER FIXED */}
      <footer className="bottom-0 left-0 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default ConfirmationPage;

/*

<p className="text-sm">{formatAddress(cart.shippingAddress)}</p>



<CartSummary
          subtotalInCents={cartTotalInCents}
          totalInCents={cartTotalInCents}
          products={cart.items.map((item) => ({
            id: item.productVariant.id,
            name: item.productVariant.product.name,
            variantName: item.productVariant.name,
            quantity: item.quantity,
            priceInCents: item.productVariant.priceInCents,
            imageUrl: item.productVariant.imageUrl,
          }))}
        /> */
