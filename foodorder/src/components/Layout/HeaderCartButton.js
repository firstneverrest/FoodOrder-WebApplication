import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderCartButton = (props) => {
  return (
    <button className="HeaderCart__button">
      <span className="HeaderCart__button-icon">
        <AiOutlineShoppingCart className="HeaderCart__button-icon-cart"/>
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCartButton;
