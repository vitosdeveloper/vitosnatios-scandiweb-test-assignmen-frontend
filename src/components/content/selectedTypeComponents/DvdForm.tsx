import { Dispatch, SetStateAction, useEffect } from 'react';
import useInput from '../../../custom-hooks/useInput';
import numberValidation from '../../../utils/numberValidation';
import ProductAttributeFormContainer from '../../containers/ProductAttributeFormContainer';
import Input from '../../form/Input';

type Props = {
  setAttributeValues: Dispatch<SetStateAction<number[]>>;
};

const DvdForm = ({ setAttributeValues }: Props) => {
  const dvdInput = useInput(0);

  useEffect(() => {
    if (numberValidation(dvdInput)) {
      setAttributeValues([]);
    } else setAttributeValues([Number(dvdInput.value)]);
  }, [dvdInput.value]);

  return (
    <ProductAttributeFormContainer>
      <Input id='size' label='Size (MB)' type='number' required {...dvdInput} />
      <p>Please provide size in MB format.</p>
    </ProductAttributeFormContainer>
  );
};

export default DvdForm;
