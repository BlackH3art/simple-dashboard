import { FC, useEffect, useState } from "react";
import { getAllCarts } from "../../api";
import { CartInterface } from "../../interfaces/CartInterface";
import { CartRow } from "../CartRow/CartRow";

export const Dashboard: FC = () => {

  const [carts, setCarts] = useState<CartInterface[]>([]);

  useEffect(() => {
    getCartsData();
  }, []);

  async function getCartsData() {
    try {
      const { data } = await getAllCarts();
      setCarts(data.carts);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="flex w-full justify-center">
      <main className="flex flex-col w-full md:w-4/5 2xl:w-3/5">

        <h2>
          Dashboard
        </h2>

        <div className="w-full flex flex-col">

          {carts.map((item, idx) => (
            <CartRow
              key={idx}
              userId={item.userId}
              productsAmount={item.totalProducts}
              totalQuantity={item.totalQuantity}
              total={item.total}
              discountedTotal={item.discountedTotal}
            />
          ))}
        </div>

      </main>
    </section>
  )
}