import { useState } from 'react';
import useInput from '../../custom-hooks/useInput';
import Button from '../form/Button';
import Input from '../form/Input';
import Selelect from '../form/Selelect';
import styles from './AddNewProduct.module.sass';
import SelectedTypeComponent from './SelectedTypeComponent';

const AddNewProduct = () => {
  const skuInput = useInput('');
  const nameInput = useInput('');
  const priceInput = useInput('');
  const [selectInput, setSelectInput] = useState<string>('dvd');
  const [attributeValues, setAttributeValues] = useState<string>('');
  console.log(attributeValues);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(skuInput.value, nameInput.value, priceInput.value, selectInput);
  };

  return (
    <form id='product_form' className={styles.form} onSubmit={handleFormSubmit}>
      <Input id='sku' label='SKU' type='text' required {...skuInput} />
      <Input id='name' label='Name' type='text' required {...nameInput} />
      <Input
        id='price'
        label='Price ($)'
        type='number'
        required
        {...priceInput}
      />
      <Selelect selectInput={selectInput} setSelectInput={setSelectInput} />
      <SelectedTypeComponent
        selectInput={selectInput}
        setAttributeValues={setAttributeValues}
      />
      <Button>enviar</Button>
    </form>
  );
};

export default AddNewProduct;
