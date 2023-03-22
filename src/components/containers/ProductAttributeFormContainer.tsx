import React from 'react';
import styles from './ProductAttributeFormContainer.module.sass';

type Props = { children: React.ReactNode };

const ProductAttributeFormContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default ProductAttributeFormContainer;
