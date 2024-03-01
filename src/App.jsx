import { useState } from 'react'
import {HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/NavBar/NavBar'
import HomeView from './components/HomeView/HomeView'
import Footer from './components/Footer/Footer'
import ProductInfo from './components/ProductInfo/ProductInfo'



function App() {

  return (
    <div className='App'>
    <BrowserRouter>
      
        <Header/> 
        <Routes>
          <Route path="/" element={<HomeView/>}/>
            
        </Routes>  
        <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
