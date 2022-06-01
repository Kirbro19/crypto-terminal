import React from "react";
import { Coin } from "./coin";
import "./coinList.css";

export const CoinList = (props) => {
  const { coins } = props;

  return (
    <div className="coin-list">
      <div className="coin-list-title">Coin list</div>
      <div className="coin-list-attributes">
        <div className="attribute-name">
          <p className="attribute">Name</p>
        </div>
        <div className="attribute-price">
          <p className="attribute">Price</p>
        </div>
        <div className="attribute-ch24h">
          <p className="attribute">24h</p>
        </div>
        <div className="attribute-ch14d">
          <p className="attribute">14d</p>
        </div>
        <div className="attribute-market-cap">
          <p className="attribute">Market cap</p>
        </div>
      </div>
      {coins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange24h={coin.price_change_percentage_24h}
            priceChange14d={coin.price_change_percentage_14d_in_currency}
            marketcap={coin.market_cap}
            sparkline_in_7d={coin.sparkline_in_7d}
          />
        );
      })}
    </div>
  );
};
