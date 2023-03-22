import { FC } from 'react';

interface Props {
  text: string;
  classes: string;
  handler: () => void;
}
export const PrimaryButton: FC<Props> = ({ text, classes, handler }) => {

  return (
    <button className={`rounded-full text-white px-5 py-2 ${classes}`} onClick={handler}>
      {text}
    </button>
  )
}