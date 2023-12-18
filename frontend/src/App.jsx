import './App.css'

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Producto from "./views/Producto";
import Carrito from "./views/Carrito";
import Error from "./views/Error";
import Login from './views/Login';
import Register from './views/Register';
import Perfil from './views/Profile'
import Contexto from "./context/Contexto";

function App() {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState([]);
  const url = "/productos.json"

  const getData = async (url) => {
    try {
      const resp = await fetch(url);
  
      if (!resp.ok) {
        throw new Error(`Server responded with an error: ${resp.status} ${resp.statusText}`);
      }
  
      const data = await resp.json();
      setProductos(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  

  useEffect(() => {
    getData(url);
  }, []);

  const totalPrecio = cart.reduce(
    (total, item) => total + item.price * item.cantidad,
    0
  );

  const globalState = {
    productos,
    cart,
    setCart,
    totalPrecio,
  };

  return (
    <>
     <Contexto.Provider value={globalState}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/login" element={< Login />} />
            <Route path="/register" element={< Register />} />
            <Route path="/carrito" element={< Carrito />} />
            <Route path="/producto/:id" element={< Producto />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path="*" element={< Error />} />
          </Routes>
        </BrowserRouter>
      </Contexto.Provider>
    </>
  );
}

export default App;
