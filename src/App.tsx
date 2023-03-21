import { Route, Routes } from 'react-router-dom';
import ProductList from './components/pages/ProductList';
import AddProduct from './components/pages/AddProduct';
import AppContainer from './components/containers/AppContainer';

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
