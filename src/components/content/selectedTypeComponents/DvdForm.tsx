import { Dispatch, SetStateAction, useEffect } from 'react';
import useInput from '../../../custom-hooks/useInput';
import numberValidation from '../../../utils/NumberInputValue';
import ProductAttributeFormContainer from '../../containers/ProductAttributeFormContainer';
import Input from '../../form/Input';

type Props = {
  setAttributeValues: Dispatch<SetStateAction<string>>;
};

const DvdForm = ({ setAttributeValues }: Props) => {
  const dvdInput = useInput(0);

  useEffect(() => {
    if (numberValidation(dvdInput)) {
      setAttributeValues('');
    } else setAttributeValues(String(Number(dvdInput.value)) + ' MB');
  }, [dvdInput.value]);

  return (
    <ProductAttributeFormContainer>
      <Input id='size' label='Size (MB)' type='number' required {...dvdInput} />
      <p>Please provide size in MB format.</p>
    </ProductAttributeFormContainer>
  );
};

export default DvdForm;
