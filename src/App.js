import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from  'react-router-dom'
import Navegador from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navegador/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/CategoryId" element={<ItemListContainer/>} />
          <Route path="/Detail/productId" element={<ItemDetailContainer/>}/>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
