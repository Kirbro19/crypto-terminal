import React, { useState } from "react";
import "./converter.css";

export const Converter = (props) => {
  const [firstCurrency, setFirstCurrency] = useState("btc");
  const [secondCurrency, setSecondCurrency] = useState("usd");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(0);
  const { coins } = props;

  const cryptoCurrencies = coins.map((cryptoSymbol) => {
    return `${cryptoSymbol.symbol}`;
  });
  const currencies = [...cryptoCurrencies, "usd"];

  const price = coins.map((coinPrice) => {
    return coinPrice.current_price;
  });
  const currentPrice = [...price, 1];

  const handleConvert = () => {
    setResult(convert());
  };

  const convert = () => {
    return (
      (amount * currentPrice[firstCurrencyIndex]) /
      currentPrice[secondCurrencyIndex]
    ).toFixed(8);
  };

  const firstCurrencyIndex = currencies.indexOf(firstCurrency);
  const secondCurrencyIndex = currencies.indexOf(secondCurrency);

  return (
    <div className="converter-container">
      <div className="input-wrapper">
        <input
          className="converter-input"
          name="amount-input"
          type={"number"}
          value={amount}
          placeholder="Введите сумму"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="currency-select"
          name="first-currency-select"
          value={firstCurrency}
          onChange={(e) => setFirstCurrency(e.target.value)}
        >
          {currencies.map((currency, index) => (
            <option key={index}>{currency}</option>
          ))}
        </select>
        to
        <select
          className="currency-select"
          name="second-currency-select"
          value={secondCurrency}
          onChange={(e) => setSecondCurrency(e.target.value)}
        >
          {currencies.map((currency, index) => (
            <option key={index}>{currency}</option>
          ))}
        </select>
      </div>
      <button className="converter-button" onClick={handleConvert}>
        Convert
      </button>
      <div className="converter-result">
        {result} {secondCurrency}
      </div>
    </div>
  );
};
