import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react'
import { CoinList } from './config/api';
import { auth } from '../src/firebase';
import { onAuthStateChanged } from 'firebase/auth';


const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [user, setUser] = useState(null);

  const [alert, setAlert] = useState({
      open: false,
      message: "",
      type: "success",
    });

    useEffect(() => {
      onAuthStateChanged(auth, user => {
        if(user)setUser(user);
        else setUser(null);
        console.log(`user: ${ user }`);
      })
    },[])

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(`fetchCoins data: ${ data }`);

    setCoins(data);
    setLoading(false);
  };
  
    useEffect(() => {
        if(currency === "USD") setSymbol('USD')
        else if (currency === "ETH") setSymbol("ETH")
    },[currency])

  return  <Crypto.Provider value={{ currency, symbol, setCurrency, coins, loading, fetchCoins, alert, setAlert, user }}>
            { children }
        </Crypto.Provider>
}

export default CryptoContext

export const CryptoState = () => {
   return useContext(Crypto);
}