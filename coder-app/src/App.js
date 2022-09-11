import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Containers/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';

function App() {


  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Desafios ReactJs"  />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
