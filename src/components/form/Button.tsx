import React from 'react';
import styles from './Button.module.sass';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: Props) => {
  const handleBtnclick = () => onClick && onClick();

  return (
    <button onClick={handleBtnclick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
