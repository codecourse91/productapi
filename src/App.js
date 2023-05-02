import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Component/Products.js';
import Product from './Component/Product.js';
import { Route, Routes} from 'react-router-dom';

function App()
{
  return(
    <>
    <Routes>
      <Route path='/' element={<Product/>}></Route>
      <Route path='products/:id' element={<Products/>}></Route>
    </Routes>
    </>
  );
}

export default App;