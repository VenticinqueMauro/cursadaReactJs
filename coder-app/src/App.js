import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Containers/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/Containers/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';
import CartProvider from './Context/CartContext';
import { Cart } from './components/Cart/Cart';
import { Error404 } from './components/404/Error404';
import { useState } from 'react';
import { Presentacion } from './components/Presentacion/Presentacion';
import audio from './components/Audio/audio.mp3'


function App() {

  const [presentacion, setPresentacion] = useState(true)


  const ingresar = () => {
      setPresentacion(false)
  }

  if(presentacion){
    return (
      <Presentacion ingresar={ingresar}/>
    )
  }

  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <CartProvider>z
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category' element={<ItemListContainer />} />
            <Route path='/lessthan25/:lessthan25' element={<ItemListContainer />} />
            <Route path='/lessthan100/:lessthan100' element={<ItemListContainer />} />
            <Route path='/morethan100/:morethan100' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
          <Footer />
      <audio autoPlay muted>
        <source src={audio} type='audio/mp3'></source>
      </audio>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
