import { Dispatch, SetStateAction, useEffect } from 'react';
import useInput from '../../../custom-hooks/useInput';
import ProductAttributeFormContainer from '../../containers/ProductAttributeFormContainer';
import Input from '../../form/Input';

type Props = {
  setAttributeValues: Dispatch<SetStateAction<string>>;
};

const FurnitureForm = ({ setAttributeValues }: Props) => {
  const heightInput = useInput(0);
  const widthInput = useInput(0);
  const lengthInput = useInput(0);

  useEffect(() => {
    setAttributeValues(
      String(heightInput.value) +
        'x' +
        String(widthInput.value) +
        'x' +
        String(lengthInput.value)
    );
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
