import React, {
  createContext,
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IProduct } from '../types/product';

const GlobalContext = createContext<{
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  error: string | null;
  massDelete: number[];
  setMassDelete: Dispatch<SetStateAction<number[]>>;
  VITE_SERVER_ROOT_URL: string;
}>({
  products: [],
  setProducts: () => {},
  error: null,
  massDelete: [],
  setMassDelete: () => {},
  VITE_SERVER_ROOT_URL: '',
});

export const useGlobalContext = () => useContext(GlobalContext);

type Props = {
  children: React.ReactNode;
};

const GlobalProvider = ({ children }: Props) => {
  const [error, setError] = useState<null | string>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [massDelete, setMassDelete] = useState<number[]>([]);

  const { VITE_SERVER_ROOT_URL } = import.meta.env;

  const getProducts = async () => {
    try {
      const res = await fetch(VITE_SERVER_ROOT_URL + '/get/getProducts.php');
      const json = await res.json();
      const data = json.map((item: IProduct) => ({
        ...item,
        id: Number(item.id),
        price: Number(item.price),
      }));
      setProducts(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        error,
        massDelete,
        setMassDelete,
        VITE_SERVER_ROOT_URL,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
