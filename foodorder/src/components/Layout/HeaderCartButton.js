import {useContext} from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(curNumber, items => {
    return curNumber + items.amount;
  }, 0);

  return (
    <button className="HeaderCart__button" onClick={props.onClick}>
      <span className="HeaderCart__button-icon">
        <AiOutlineShoppingCart className="HeaderCart__button-icon-cart"/>
      </span>
      <span>Your Cart</span>
      <span>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
