import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderCartButton = (props) => {
  return (
    <button className="Cart__button">
      <span className="Cart__button-icon">
        <AiOutlineShoppingCart className="Cart__button-icon-cart"/>
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCartButton;
