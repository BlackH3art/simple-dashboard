import { FC } from "react";
import { StatContainer } from "./StatContainer";

interface Props {
  userId: number;
  productsAmount: number;
  totalQuantity: number;
  total: number;
  discountedTotal: number;
  toggleSelected: () => void;
  selected: boolean;
}

export const CartRow: FC<Props> = ({ userId, productsAmount, totalQuantity, total, discountedTotal, toggleSelected, selected }) => {

  return (
    <div 
      className={`w-full rounded-xl border-[1px] my-1 ${selected ? "border-gray-700" : "border-gray-300"}`} 
      onClick={toggleSelected}
    >
      <div className="w-full h-16 flex items-center">
        <h2 className="pl-8">
          User #{userId} cart
        </h2>
      </div>

      {selected ? (

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
      ) : null}
    </div>
  )
}