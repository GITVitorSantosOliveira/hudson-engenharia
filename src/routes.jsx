import React from 'react'
import { Routes } from 'react-router-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
// import Products from './pages/products';
import Services from './pages/Services'

const Routers=()=>{
  return(
    <>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
             <Route exact path="/services" element={<Services/>}/> 
            {/* <Route exact path="/products" element={<Products/>}/> */}
            <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routers;