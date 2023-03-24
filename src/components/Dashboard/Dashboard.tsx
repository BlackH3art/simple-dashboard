import { FC, MouseEvent, useContext, useEffect, useState } from "react";
import { getAllCarts, deleteCart } from "../../api";
import { AppContext } from "../../context/AppContext";
import { CartInterface } from "../../interfaces/CartInterface";
import { CartRow } from "../CartRow/CartRow";
import { PrimaryButton } from "../_Reusable/PrimaryButton/PrimaryButton";

export const Dashboard: FC = () => {

  const [carts, setCarts] = useState<CartInterface[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { setAddCartModal } = useContext(AppContext);

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

        <div className="flex items-center justify-between mt-10 pb-2">
          <h2 className="text-xl">
            Dashboard
          </h2>

          <PrimaryButton 
            text="Add cart"
            handler={() => setAddCartModal(prev => !prev)}
            classes="bg-blue-600 hover:bg-blue-500 duration-200"
          />
        </div>

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
              products={item.products}
            />
          ))}
        </div>

      </main>
    </section>
  )
}