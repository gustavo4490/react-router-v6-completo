import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About';
import Users from './pages/Users';
import NotFound from './pages/NotFound'
import Nadbar from './components/Nadbar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='*' element= {<NotFound/>}/>
        <Route path='/nadbar' element={<Nadbar/>} />
      </Routes>
    </BrowserRouter>
  )
}
