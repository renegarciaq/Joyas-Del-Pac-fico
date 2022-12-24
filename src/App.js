import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <main>    
      <NavBar />
        <ItemListContainer greeting={"Bienvenidos a la tienda"} />
      </main>
    </div>
  );
}

export default App;

