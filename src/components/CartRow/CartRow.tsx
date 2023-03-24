import { FC, MouseEvent } from "react";
import { MdDeleteOutline } from 'react-icons/md';
import { ProductInterface } from "../../interfaces/ProductInterface";
import { Chart } from "../Chart/CHart";
import { StatContainer } from "./StatContainer";

interface Props {
  userId: number;
  productsAmount: number;
  totalQuantity: number;
  total: number;
  discountedTotal: number;
  toggleSelected: () => void;
  selected: boolean;
  handleDeleteCart: (e: MouseEvent<HTMLButtonElement>) => void;
  products: ProductInterface[];
}

export const CartRow: FC<Props> = ({ userId, productsAmount, totalQuantity, total, discountedTotal, toggleSelected, selected, handleDeleteCart, products }) => {

  console.log(products);
  
  return (
    <div 
      className={`w-full rounded-xl border-[1px] my-1 hover:cursor-pointer ${selected ? "border-gray-700" : "border-gray-300"}`} 
      onClick={toggleSelected}
    >
      <div className="w-full h-16 flex items-center justify-between px-8">
        <h2 className="">
          User #{userId} cart
        </h2>

        {selected ? (
          <button className="p-2 hover:text-red-500 duration-200" onClick={handleDeleteCart}>
            <MdDeleteOutline size={22} />
          </button>
        ) : null}
      </div>

      {selected ? (
        <>
          <div className="w-full grid grid-cols-4">
            <StatContainer 
              title="Products amount:"
              number={productsAmount}
              currency={false}
            />

            <StatContainer 
              title="Total quantity:"
              number={totalQuantity}
              currency={false}
            />

            <StatContainer 
              title="Total value:"
              number={total}
              currency={true}
            />

            <StatContainer 
              title="Discounted value:"
              number={discountedTotal}
              currency={true}
            />
          </div>

          <Chart products={products} />

        </>
      ) : null}
    </div>
  )
}