import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../custom-hooks/useTitle';
import AddNewProduct from '../content/AddNewProduct';
import Header from '../layout/Header';

const AddProduct = () => {
  useTitle('Product Add');
  const navigate = useNavigate();
  const btn1func = useCallback(() => {}, []);
  //  reset form state when cancelin
  const btn2func = useCallback(() => navigate('/'), []);

  return (
    <>
      <Header
        title='Product Add'
        btn1name='Save'
        btn2name='Cancel'
        btn1func={btn1func}
        btn2func={btn2func}
      />
      <AddNewProduct />
    </>
  );
};

export default AddProduct;
