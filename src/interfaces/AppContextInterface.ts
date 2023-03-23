import { Dispatch, SetStateAction } from "react";

export interface AppContextInterface {
  addCartModal: boolean;
  setAddCartModal: Dispatch<SetStateAction<boolean>>;
}