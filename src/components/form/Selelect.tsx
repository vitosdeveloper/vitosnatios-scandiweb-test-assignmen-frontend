import { Dispatch, memo, SetStateAction } from 'react';
import styles from './Select.module.sass';

type Props = {
  selectInput: string;
  setSelectInput: Dispatch<SetStateAction<string>>;
};

const Selelect = ({ selectInput, setSelectInput }: Props) => {
  return (
    <div className={styles.selectContainer}>
      <label>Type Switcher</label>
      <select
        id='productType'
        required
        value={selectInput}
        onChange={({ target }) => setSelectInput(target.value)}
      >
        <option id='DVD' value='dvd'>
          DVD
        </option>
        <option id='Book' value='book'>
          Book
        </option>
        <option id='Furniture' value='furniture'>
          Furniture
        </option>
      </select>
    </div>
  );
};

export default memo(Selelect);
