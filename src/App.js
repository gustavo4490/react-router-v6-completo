import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage';
import About from './pages/About';
import Users from './pages/Users';
import NotFound from './pages/NotFound'
import Nadbar from './components/Nadbar';
import UserPage from './pages/UserPage';
import Dash from './pages/Dash';
import SubComponenete from './components/SubComponenete';

export default function App() {
  return (
    <BrowserRouter>
      <Nadbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/users' element={<Users />} />
        <Route path='/salir' element={<Navigate to="/users" />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/dash/*' element={<Dash />} >
          <Route path="welcome" element={<SubComponenete />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
