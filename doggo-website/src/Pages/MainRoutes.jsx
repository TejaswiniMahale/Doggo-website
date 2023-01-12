import React from 'react'
import {Route, Routes} from "react-router-dom"
import Register from './Register'
import Login from './Login'
import HomePage from './HomePage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<HomePage/>}/>
    </Routes>
  )
}

export default MainRoutes