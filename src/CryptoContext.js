import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react'
import { CoinList } from './config/api';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [user, setUser] = useState(null);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };
  
    useEffect(() => {
        if(currency === "USD") setSymbol('USD')
        else if (currency === "ETH") setSymbol("ETH")
    },[currency])

  return  <Crypto.Provider value={{ currency, symbol, setCurrency, coins, loading, fetchCoins }}>
            { children }
        </Crypto.Provider>
}

export default CryptoContext

export const CryptoState = () => {
   return useContext(Crypto);
}