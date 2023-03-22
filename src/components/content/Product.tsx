import { memo, useCallback } from 'react';
import { IProduct } from '../../types/product';
import priceFormatter from '../../utils/priceFormatter';
import styles from './Product.module.sass';

type Props = {
  product: IProduct;
  addToRemoveList: (id: number) => void;
  removeFromRemoveList: (id: number) => void;
};

const Product = ({ product, addToRemoveList, removeFromRemoveList }: Props) => {
  const { id, sku, name, price, productType, attribute } = product;

  const measureType = useCallback(() => {
    if (productType === 'dvd') {
      return 'Size: ';
    } else if (productType === 'book') {
      return 'Weight: ';
    } else if (productType === 'furniture') {
      return 'Dimensions: ';
    }
  }, [productType]);

  const handleCheckboxChange = useCallback(
    ({ target }: any) => {
      if (target.checked) {
        addToRemoveList(id);
      } else {
        removeFromRemoveList(id);
      }
    },
    [id]
  );

  return (
    <label htmlFor={String(id)} className={styles.product}>
      <input
        className='delete-checkbox'
        id={String(id)}
        type='checkbox'
        onChange={handleCheckboxChange}
      />
      <div className={styles.itemData}>
        <p>{sku.toUpperCase()}</p>
        <p>{name}</p>
        <p>{priceFormatter(price)}</p>
        <p>{measureType() + attribute}</p>
      </div>
    </label>
  );
};

export default memo(Product);
