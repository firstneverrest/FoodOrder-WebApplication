import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul >
      {[{ id: "c1", name: "Sushi", amount: 2, price: 10 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className="Cart__total">
        <span>Total Amount</span>
        <span>45.34</span>
      </div>
      <div className="Cart__actions">
        <button className="Cart__actions-close" onClick={props.onHideCart}>Close</button>
        <button className="Cart__actions-order">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
