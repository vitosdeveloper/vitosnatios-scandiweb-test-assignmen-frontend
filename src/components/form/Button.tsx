import React, { memo } from 'react';
import styles from './Button.module.sass';

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

const Button = ({ children, onClick, disabled }: Props) => {
  const handleBtnclick = () => onClick && onClick();

  return (
    <button
      disabled={disabled}
      onClick={handleBtnclick}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default memo(Button);
