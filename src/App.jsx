
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import Cart from './pages/cart'


function App() {


  return (
    <>  
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cart" element={<Cart />} />
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
