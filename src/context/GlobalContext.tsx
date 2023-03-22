import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { NewProduct, IProduct } from '../types/product';

const GlobalContext = createContext<{
  products: IProduct[];
  setProducts: Dispatch<SetStateAction<IProduct[]>>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
  massDelete: number[];
  setMassDelete: Dispatch<SetStateAction<number[]>>;
  VITE_SERVER_ROOT_URL: string;
  newProduct: NewProduct;
  setNewProduct: Dispatch<SetStateAction<NewProduct>>;
  getProducts: () => void;
}>({
  products: [],
  setProducts: () => {},
  error: null,
  setError: () => {},
  massDelete: [],
  setMassDelete: () => {},
  VITE_SERVER_ROOT_URL: '',
  newProduct: {
    sku: '',
    name: '',
    price: 0,
    productType: '',
    attribute: '',
  },
  setNewProduct: () => {},
  getProducts: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

type Props = {
  children: React.ReactNode;
};

const GlobalProvider = ({ children }: Props) => {
  const [error, setError] = useState<null | string>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [massDelete, setMassDelete] = useState<number[]>([]);
  const [newProduct, setNewProduct] = useState<NewProduct>({
    sku: '',
    name: '',
    price: 0,
    productType: '',
    attribute: '',
  });

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
        setError,
        massDelete,
        setMassDelete,
        VITE_SERVER_ROOT_URL,
        newProduct,
        setNewProduct,
        getProducts,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
