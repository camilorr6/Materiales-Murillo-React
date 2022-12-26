import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navegador/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
