import { memo, useCallback } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import Product from './Product';
import styles from './Products.module.sass';

const Products = () => {
  const { products, setMassDelete } = useGlobalContext();

  const addToRemoveList = useCallback((id: number) => {
    setMassDelete((prev) => [...prev, id]);
  }, []);
  const removeFromRemoveList = useCallback((id: number) => {
    setMassDelete((prev) => prev.filter((prevId) => prevId !== id));
  }, []);

  return (
    <div className={styles.products}>
      {products?.map((product) => (
        <Product
          addToRemoveList={addToRemoveList}
          removeFromRemoveList={removeFromRemoveList}
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;
