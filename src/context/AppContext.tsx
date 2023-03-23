import { createContext, FC, ReactNode, useState } from "react";
import { AppContextInterface } from "../interfaces/AppContextInterface";

export const AppContext = createContext<AppContextInterface>({
  addCartModal: false,
  setAddCartModal: () => {},
});

interface Props {
  children: ReactNode;
}

export const AppContextProvider: FC<Props> = ({ children }) => {

  const [addCartModal, setAddCartModal] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{
      addCartModal,
      setAddCartModal,
    }}>
      {children}
    </AppContext.Provider>
  )
}

