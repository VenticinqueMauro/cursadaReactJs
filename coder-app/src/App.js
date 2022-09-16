import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Containers/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import CartProvider from './Context/CartContext';




function App() {

  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Desafios ReactJs" />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
