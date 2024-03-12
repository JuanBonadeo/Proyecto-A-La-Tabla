import {HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/NavBar/NavBar'
import HomeView from './components/HomeView/HomeView'
import Footer from './components/Footer/Footer'
import ProductInfoView from './components/ProductInfo/ProudctInfoView'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import WspButton from './components/WspButton/WspButton'
import { Contacto } from './components/Contacto/Contacto'
import ProductsContainer from './components/ProductsContainer/ProductsContainer'




function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      <CartProvider>
      <Header/> 
      <div className="contain">
        <Routes>
          <Route path="/" element={<HomeView/>}/>
            <Route path="/producto/:productId" element={<ProductInfoView/>}/>
          <Route path="/carrito" element={<Cart/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/productos" element={<ProductsContainer/>}/>
        </Routes>  
      </div>
      <WspButton/>
      <Footer/>
      </CartProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
