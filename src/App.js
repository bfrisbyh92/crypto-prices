import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CoinPage from './pages/CoinPage'
import { makeStyles } from '@material-ui/styles'
import Alert from './components/Alert'

const App = () => {

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}))

const classes = useStyles();

  return (
    <div className={ classes.App }>
        <Header />
    <Routes>
        <Route exact path='/' element={ <HomePage /> }  />
        <Route path='/coins/:id' element={ <CoinPage/> }  />
     </Routes>
        <Alert />
    </div>
  )
}

export default App