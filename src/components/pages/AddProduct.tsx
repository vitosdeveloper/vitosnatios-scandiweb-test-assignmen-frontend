import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/GlobalContext';
import useTitle from '../../custom-hooks/useTitle';
import AddNewProduct from '../content/AddNewProduct';
import Header from '../layout/Header';

const AddProduct = () => {
  useTitle('Product Add');
  const { newProduct, setError, VITE_SERVER_ROOT_URL, getProducts, products } =
    useGlobalContext();
  const navigate = useNavigate();

  const btn2func = useCallback(() => navigate('/'), []);
  const btn1func = useCallback(async () => {
    const { sku, name, price, productType, attribute } = newProduct;
    if (
      sku.length &&
      name.length &&
      String(price).length &&
      productType.length &&
      attribute.length
    ) {
      try {
        setError(null);
        await getProducts();
        const skuArr = products.map((product) => product.sku);
        if (!skuArr.includes(sku)) {
          const res = await fetch(
            VITE_SERVER_ROOT_URL + '/post/postProduct.php',
            {
              method: 'POST',
              body: JSON.stringify(newProduct),
              headers: {
                'Content-Type': 'application/json; charset=UTF-8',
              },
            }
          );
          if (res.ok) {
            await getProducts();
            btn2func();
          }
        } else {
          throw new Error('Sku is already being used.');
        }
      } catch (err: any) {
        console.log(err.message);
      }
    } else {
      setError('Please, submit required data');
    }
  }, [newProduct, VITE_SERVER_ROOT_URL, btn2func]);

  return (
    <>
      <Header
        title='Product Add'
        btn1name='Save'
        btn2name='Cancel'
        btn1func={btn1func}
        btn2func={btn2func}
      />
      <AddNewProduct />
    </>
  );
};

export default AddProduct;
