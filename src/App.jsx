import React, { useState, useEffect } from "react";
import { CoinList } from "./components/coinList";
import { Menu } from "./components/menu";
import { Spinner } from "./components/spinner";

export const App = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=true&price_change_percentage=14d"
    );
    const dataCoins = await res.json();
    setCoins(dataCoins);
    setIsLoading(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div className="app">
      <h1 className="app-title">Crypto terminal</h1>
      <div className="app-wrapper">
        <Menu coins={coins} />
        <CoinList coins={coins} />
      </div>
    </div>
  ) : (
    <div className="app">
      <h1 className="app-title">Crypto terminal</h1>
      <div className="app-wrapper">
        <Spinner />
      </div>
    </div>
  );
};
