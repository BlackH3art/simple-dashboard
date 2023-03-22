import { FC } from "react";
import { StatContainer } from "./StatContainer";

interface Props {
  userId: number;
  productsAmount: number;
  totalQuantity: number;
  total: number;
  discountedTotal: number;
}

export const CartRow: FC<Props> = ({ userId, productsAmount, totalQuantity, total, discountedTotal }) => {

  return (
    <div className="w-full rounded-xl border-[1px] border-gray-600 my-1">
      <div className="w-full h-16 flex items-center">
        <h2 className="pl-8">
          User #{userId} cart
        </h2>
      </div>

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
    </div>
  )
}