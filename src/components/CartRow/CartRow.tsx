import { FC } from "react";

interface Props {
  userId: number;
}

export const CartRow: FC<Props> = ({ userId }) => {

  return (
    <div className="w-full rounded-xl border-[1px] border-gray-600 my-1">
      <div className="w-full h-16 flex items-center">
        <h2 className="pl-8">
          User #{userId} cart
        </h2>
      </div>
    </div>
  )
}