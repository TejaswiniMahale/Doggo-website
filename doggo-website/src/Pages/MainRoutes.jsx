import React from 'react'
import {Route, Routes} from "react-router-dom"
import Register from './Register'
import Login from './Login'
import HomePage from './HomePage'
import Puppy from './Puppy'
import Navbar from '../Component/Navbar'

const MainRoutes = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/puppy' element={<Puppy/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes