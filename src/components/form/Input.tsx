import { memo } from 'react';
import styles from './Input.module.sass';

type Props = {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  value?: string;
};

const Input = ({ id, label, type, required, ...props }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        onError={() => console.log('lol')}
        id={id}
        type={type}
        required={required}
        {...props}
      />
    </div>
  );
};

export default memo(Input);
