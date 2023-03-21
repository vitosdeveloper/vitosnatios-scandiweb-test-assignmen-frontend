import React from 'react';
import styles from './Error.module.sass';

type Props = {
  children: React.ReactNode;
};

const Error = ({ children }: Props) => {
  return <p className={styles.error}>{children}</p>;
};

export default Error;
