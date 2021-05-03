import { Fragment } from 'react'

import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

const Meals = () => {

    return (
        <div className="Meals">
            <MealsSummary />
            <AvailableMeals />
        </div>
    )
}

export default Meals