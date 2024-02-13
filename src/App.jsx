import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import { LoginContextProvider } from './contexts/LoginContext'
import { AddtoCartProvider } from './contexts/AddtoCart'

function App() {
  return (
   <>
    <LoginContextProvider>
    <AddtoCartProvider>
    <BrowserRouter>
      <Routes>
     
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      
      </Routes>
    </BrowserRouter>
    </AddtoCartProvider>
    </LoginContextProvider>
   </>
  )
}

export default App