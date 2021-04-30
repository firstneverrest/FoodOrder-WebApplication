import React from "react";

import MealItemForm from './MealItemForm'

const MealItem = ({ id, name, description, price }) => {
  const Price = `${price.toFixed(2)}฿`;

  return (
    <li className="AvailableMeals__meal">
      <div>
        <h3 className="AvailableMeals__meal-name">{name}</h3>
        <p className="AvailableMeals__meal-description">{description}</p>
        <p className="AvailableMeals__meal-price">{Price}</p>
      </div>
      <div>
        <MealItemForm id={id}/>
      </div>
    </li>
  );
};

export default MealItem;
