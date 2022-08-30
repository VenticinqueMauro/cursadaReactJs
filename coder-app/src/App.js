import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola!, probando greeting"/>
    </div>
  );
}

export default App;
