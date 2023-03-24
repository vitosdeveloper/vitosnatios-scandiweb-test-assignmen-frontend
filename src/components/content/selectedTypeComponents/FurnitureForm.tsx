import { Dispatch, SetStateAction, useEffect } from 'react';
import useInput from '../../../custom-hooks/useInput';
import numberValidation from '../../../utils/numberValidation';
import ProductAttributeFormContainer from '../../containers/ProductAttributeFormContainer';
import Input from '../../form/Input';

type Props = {
  setAttributeValues: Dispatch<SetStateAction<number[]>>;
};

const FurnitureForm = ({ setAttributeValues }: Props) => {
  const heightInput = useInput(0);
  const widthInput = useInput(0);
  const lengthInput = useInput(0);

  useEffect(() => {
    if (
      numberValidation(heightInput) ||
      numberValidation(widthInput) ||
      numberValidation(lengthInput)
    ) {
      setAttributeValues([]);
    } else
      setAttributeValues([
        Number(heightInput.value),
        Number(widthInput.value),
        Number(lengthInput.value),
      ]);
  }, [heightInput.value, widthInput.value, lengthInput.value]);

  return (
    <ProductAttributeFormContainer>
      <Input
        id='height'
        label='Height (CM)'
        type='number'
        required
        {...heightInput}
      />
      <Input
        id='width'
        label='Width (CM)'
        type='number'
        required
        {...widthInput}
      />
      <Input
        id='length'
        label='Length (CM)'
        type='number'
        required
        {...lengthInput}
      />
      <p>Please provide dimensions in HxWxL format.</p>
    </ProductAttributeFormContainer>
  );
};

export default FurnitureForm;
