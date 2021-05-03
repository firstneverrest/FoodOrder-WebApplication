import React from "react";
import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const Price = `${price.toFixed(2)}฿`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className="AvailableMeals__meal">
      <div>
        <h3 className="AvailableMeals__meal-name">{name}</h3>
        <p className="AvailableMeals__meal-description">{description}</p>
        <p className="AvailableMeals__meal-price">{Price}</p>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
