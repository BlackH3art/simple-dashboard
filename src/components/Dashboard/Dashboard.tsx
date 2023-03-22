import { FC, MouseEvent, useEffect, useState } from "react";
import { getAllCarts, deleteCart } from "../../api";
import { CartInterface } from "../../interfaces/CartInterface";
import { CartRow } from "../CartRow/CartRow";

export const Dashboard: FC = () => {

  const [carts, setCarts] = useState<CartInterface[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const toggleSelected = (id: number) => {
    if(selectedId === id) return setSelectedId(null);
    setSelectedId(id);
  }


  const deleteAndRemoveCart = async (id: number) => {
    try {
      const res = await deleteCart(id);
      if(res.status === 200) {
        const filtered = carts.filter(item => item.id !== id);
        setCarts(filtered);
      }
      
    } catch (error) {
      console.error(error)
    }
  }

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
              toggleSelected={() => toggleSelected(item.id)}
              selected={item.id === selectedId}
              handleDeleteCart={(e: MouseEvent<HTMLButtonElement>) => { 
                e.stopPropagation();
                deleteAndRemoveCart(item.id)
              }}
            />
          ))}
        </div>

      </main>
    </section>
  )
}