import { FC } from 'react';

interface Props {
  text: string;
  classes: string;
}
export const PrimaryButton: FC<Props> = ({ text, classes }) => {

  return (
    <button className={`rounded-full text-white px-5 py-2 ${classes}`}>
      {text}
    </button>
  )
}