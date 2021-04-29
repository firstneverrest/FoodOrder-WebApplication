import React from "react";

const MealItem = ({ name, description, price }) => {
  const Price = `${price.toFixed(2)}฿`;

  return (
    <li className="AvailableMeals__meal">
      <h3 className="AvailableMeals__meal-name">{name}</h3>
      <p className="AvailableMeals__meal-description">{description}</p>
      <p className="AvailableMeals__meal-price">{Price}</p>
    </li>
  );
};

export default MealItem;
