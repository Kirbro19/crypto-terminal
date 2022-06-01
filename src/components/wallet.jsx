import React, { useState } from "react";
import "./wallet.css";

export const Wallet = (props) => {
  const [btcBalance, setBtcBalance] = useState(0);
  const [ethBalance, setEthBalance] = useState(0);
  const [btcUsdBalance, setBtcUsdBalance] = useState(0);
  const [ethUsdBalance, setEthUsdBalance] = useState(0);
  const { coins } = props;
  const overallBalance = (btcUsdBalance + ethUsdBalance).toFixed(2);

  const price = coins.map((coinPrice) => {
    return coinPrice.current_price;
  });
  const currentPrice = [...price];

  const handleBtcChange = (e) => {
    setBtcBalance(e.target.value);
    setBtcUsdBalance(e.target.value * currentPrice[0]);
  };

  const handleEthChange = (e) => {
    setEthBalance(e.target.value);
    setEthUsdBalance(e.target.value * currentPrice[1]);
  };

  return (
    <div className="wallet-container">
      <div className="wallet-balance-wrapper">
        <div className="wallet-input-wrapper">
        <div className="btc-wrapper">
          <div className="wallet-balance">BTC: {btcUsdBalance.toFixed(2)}$</div>
          <input
            className="wallet-balance-input"
            onChange={handleBtcChange}
            value={btcBalance}
            type={"number"}
          />
        </div>
        <div className="eth-wrapper">
          <div className="wallet-balance">ETH: {ethUsdBalance.toFixed(2)}$</div>
          <input
            className="wallet-balance-input"
            onChange={handleEthChange}
            value={ethBalance}
            type={"number"}
          />
        </div>
        </div>
        <div className="wallet-overall-balance">
          <p>Общий баланс:</p>
          <p>{overallBalance}$</p>
        </div>
      </div>
    </div>
  );
};
