import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CoinPage from './pages/CoinPage'

const App = () => {
  return (
    <>
        <Header />
    <Routes>
        <Route exact path='/' element={ <HomePage /> }  />
        <Route path='/coins/:id' element={ <CoinPage/> }  />

     </Routes>
    </>
  )
}

export default App