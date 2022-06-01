import React, { useState, useEffect } from "react";
import axios from "axios";
import { CoinList } from "./components/coinList";
import { Menu } from "./components/menu";

export const App = () => {
  const [coins, setCoins] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchData() {
    const res = await axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=true&price_change_percentage=14d"
    );
    const dataCoins = res.data;
    setCoins(dataCoins);
    setIsLoaded(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return isLoaded ? (
    <div className="app">
      <h1 className="app-title">Crypto terminal</h1>
      <div className="app-wrapper">
        <Menu coins={coins} />
        <CoinList coins={coins} />
      </div>
    </div>
  ) : null;
};
