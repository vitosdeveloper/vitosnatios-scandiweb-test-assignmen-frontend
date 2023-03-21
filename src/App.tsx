import { Route, Routes } from 'react-router-dom';
import ProductList from './components/pages/ProductList';
import AddProduct from './components/pages/AddProduct';
import AppContainer from './components/containers/AppContainer';
import Footer from './components/layout/Footer';

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
