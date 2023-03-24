import { Dispatch, memo, SetStateAction } from 'react';
import BookForm from './selectedTypeComponents/BookForm';
import DvdForm from './selectedTypeComponents/DvdForm';
import FurnitureForm from './selectedTypeComponents/FurnitureForm';

type Props = {
  selectInput: string;
  setAttributeValues: Dispatch<SetStateAction<number[]>>;
};

const SelectedTypeComponent = ({ selectInput, setAttributeValues }: Props) => {
  if (selectInput === 'dvd')
    return <DvdForm setAttributeValues={setAttributeValues} />;
  if (selectInput === 'book')
    return <BookForm setAttributeValues={setAttributeValues} />;
  if (selectInput === 'furniture')
    return <FurnitureForm setAttributeValues={setAttributeValues} />;
  return <div>Invalid option.</div>;
};

export default memo(SelectedTypeComponent);
