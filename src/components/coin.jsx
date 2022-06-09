import React, { useState } from "react";
import "./coin.css";
import { CoinChart } from "./coinChart";

export const Coin = ({
  image,
  name,
  symbol,
  price,
  priceChange24h,
  priceChange14d,
  marketcap,
  sparkline_in_7d
}) => {
  const [isHidden, setIsHidden] = useState(true);
  
  const handleChartChange = () => {
    if (isHidden === true) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <div className='coin'>
      <div className="coin-row"
          onClick={handleChartChange}
          >
        <div className="coin-info">
          <img src={image} alt="coin-img" />
          <div className="coin-name-block">
            <div className="coin-name">{name}</div>
            <div className="coin-symbol">{symbol}</div>
          </div>
        </div>
          <div className="coin-price">{price}$</div>
          {priceChange24h > 0 ? (
            <div className="coin-change24h green">
              {priceChange24h.toFixed(2)}%
            </div>
          ) : (
            <div className="coin-change24h red">{priceChange24h.toFixed(2)}%</div>
          )}

          {priceChange14d > 0 ? (
            <div className="coin-change14d green">
              {priceChange14d.toFixed(2)}%
            </div>
          ) : (
            <div className="coin-change14d red">{priceChange14d.toFixed(2)}%</div>
          )}
          <p className="coin-marketcap">{marketcap.toLocaleString()}$</p>
      </div>
      <div className={isHidden ? 'hidden' : 'no-hidden'}>
        <CoinChart sparkline_in_7d={sparkline_in_7d} name={name}/>
      </div>
      </div>
  );
};
