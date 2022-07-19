import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react'
import { CoinList } from './config/api';
import { auth, db } from '../src/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';


const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [user, setUser] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user?.uid);
      let unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          setWatchlist(coin.data().coins);
          console.log(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });

      return unsubscribe;
    }
  }, [user]);

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

  return  <Crypto.Provider value={{ watchlist, currency, symbol, setCurrency, coins, loading, fetchCoins, alert, setAlert, user }}>
            { children }
        </Crypto.Provider>
}

export default CryptoContext

export const CryptoState = () => {
   return useContext(Crypto);
}