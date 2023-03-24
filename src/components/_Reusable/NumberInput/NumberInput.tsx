import { ChangeEventHandler, FC } from 'react';

interface Props {
  label: string;
  name: string;
  handler: ChangeEventHandler;
  value: number;
}

export const NumberInput: FC<Props> = ({ label, name, handler, value }) => {

  return (
    <label className="flex justify-between items-center py-2">
      <p>{label}</p>
      <input 
        className="w-20 border-[1px] border-gray-300 px-3 py-1" 
        type="number" 
        name={name}
        onChange={handler}
        value={value}
      />
    </label>
  )
}