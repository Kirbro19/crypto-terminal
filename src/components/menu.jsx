import React, { useState } from "react";
import { Converter } from "./converter";
import { Wallet } from "./wallet";
import "./menu.css";

export const Menu = (props) => {
  const [isChecked, setIsChecked] = useState("false");
  const { coins } = props;

  const handleInputChange = () => {
    if (isChecked === "false") {
      setIsChecked("true");
    } else {
      setIsChecked("false");
    }
  };

  return (
    <div className="menu-container">
      {(isChecked === 'true') ? <Wallet coins={coins} /> : <Converter coins={coins} /> }
      <div className="btn-container">
        <label className="switch btn-color-mode-switch">
          <input
            className="btn"
            type={"checkbox"}
            value={1}
            onChange={handleInputChange}
          />
          <label
            className="btn-color-mode-switch-inner"
            data-on="Wallet"
            data-off="Converter"
          ></label>
        </label>
      </div>
    </div>
  );
};
