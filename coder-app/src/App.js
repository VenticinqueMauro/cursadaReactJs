import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {


  return (
    <div>
      <NavBar />
      <ItemListContainer
        greeting="Desafios ReactJs" />
    </div>
  );
}

export default App;
