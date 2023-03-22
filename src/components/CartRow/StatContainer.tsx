import { FC } from "react";

interface Props {
  title: string;
  number: number;
  currency: boolean;
}
export const StatContainer: FC<Props> = ({ title, number, currency }) => {

  return (
    <div className="flex flex-col justify-around items-center h-16">
      <div className="uppercase text-sm text-gray-600 font-thin">
        {title}
      </div>

      <div className="font-semibold">
        {currency ? "$" : ""}{number}
      </div>
    </div>
  )
}