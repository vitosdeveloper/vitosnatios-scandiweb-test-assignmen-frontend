import { redirect, useNavigate } from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

type Props = {};

const ProductList = (props: Props) => {
  const navigate = useNavigate();
  const btn1func = () => navigate('/add-product');
  const btn2func = () => {};

  return (
    <>
      <Header
        title='Product List'
        btn1name='ADD'
        btn2name='MASS DELETE'
        btn1func={btn1func}
        btn2func={btn2func}
      />
      <Footer />
    </>
  );
};

export default ProductList;
