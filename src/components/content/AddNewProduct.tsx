import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import useInput from '../../custom-hooks/useInput';
import Button from '../form/Button';
import Input from '../form/Input';
import Selelect from '../form/Selelect';
import Error from '../shared/Error';
import styles from './AddNewProduct.module.sass';
import SelectedTypeComponent from './SelectedTypeComponent';

const AddNewProduct = () => {
  const { error, setNewProduct, setError } = useGlobalContext();
  const skuInput = useInput('');
  const nameInput = useInput('');
  const priceInput = useInput('');
  const [selectInput, setSelectInput] = useState<string>('dvd');
  const [attributeValues, setAttributeValues] = useState<string>('');

  useEffect(() => {
    setError('');
    setNewProduct({
      sku: skuInput.value,
      name: nameInput.value,
      price: Number(priceInput.value),
      productType: selectInput,
      attribute: attributeValues,
    });
  }, [
    skuInput.value,
    nameInput.value,
    priceInput.value,
    selectInput,
    attributeValues,
  ]);

  return (
    <form id='product_form' className={styles.form}>
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
      {error && <Error>{error}</Error>}
    </form>
  );
};

export default AddNewProduct;
