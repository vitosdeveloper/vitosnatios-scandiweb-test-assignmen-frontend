import { Dispatch, SetStateAction, useEffect } from 'react';
import useInput from '../../../custom-hooks/useInput';
import numberValidation from '../../../utils/NumberInputValue';
import ProductAttributeFormContainer from '../../containers/ProductAttributeFormContainer';
import Input from '../../form/Input';

type Props = {
  setAttributeValues: Dispatch<SetStateAction<string>>;
};

const BookForm = ({ setAttributeValues }: Props) => {
  const bookInput = useInput(0);

  useEffect(() => {
    if (numberValidation(bookInput)) {
      setAttributeValues('');
    } else setAttributeValues(String(Number(bookInput.value)) + 'KG');
  }, [bookInput.value]);

  return (
    <ProductAttributeFormContainer>
      <Input
        id='weight'
        label='Weight (KG)'
        type='number'
        required
        {...bookInput}
      />
      <p>Please provide weight in KG format.</p>
    </ProductAttributeFormContainer>
  );
};

export default BookForm;
