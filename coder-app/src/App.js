import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Containers/ItemListContainer';

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
