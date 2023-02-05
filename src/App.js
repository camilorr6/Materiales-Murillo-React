import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Navegador from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from 'context/CartContext';



function App() {
  

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <Navegador/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path="/item/:productId" element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
