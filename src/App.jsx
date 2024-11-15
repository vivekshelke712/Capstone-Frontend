import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Help from './pages/Help'
import Organizations from './pages/Organizations'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'

const App = () => {
  return <>
   <BrowserRouter>
   <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/help' element={<Help />} />
          <Route path='/organizations' element={<Organizations />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  </>
}

export default App
