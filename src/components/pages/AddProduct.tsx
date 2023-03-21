import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../utils/useTitle';
import Header from '../layout/Header';

const AddProduct = () => {
  const navigate = useNavigate();
  const btn1func = useCallback(() => {}, []);
  //  reset form state when cancelin
  const btn2func = useCallback(() => navigate('/'), []);

  useEffect(() => {
    useTitle('Product Add');
  }, []);
  return (
    <>
      <Header
        title='Product Add'
        btn1name='Save'
        btn2name='Cancel'
        btn1func={btn1func}
        btn2func={btn2func}
      />
    </>
  );
};

export default AddProduct;
