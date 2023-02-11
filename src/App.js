// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/cartProvider';
import Cart from './components/Cart';


function App() {
  return (
    <BrowserRouter> 
    <CartProvider>      
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:category" element={<ItemListContainer />} />
      <Route path="item/:id" element={<ItemDetailContainer />} />
      <Route path="cart" element={<Cart/>} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
  );    
}

export default App;

