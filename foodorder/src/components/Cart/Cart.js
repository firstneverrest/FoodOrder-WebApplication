import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      <div>{cartItems}</div>
      <div className="Cart__total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="Cart__actions">
        <button className="Cart__actions-close" onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className="Cart__actions-order">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
