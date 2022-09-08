import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
