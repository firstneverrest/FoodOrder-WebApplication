const MEALS = [
    {
        id: 'food1',
        name: 'Thai Red Curry Noodle',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, qui officiis? Ipsam laborum eaque debitis nesciunt pariatur autem, rerum maxime.',
        price: '50฿'
    },
    {
        id: 'food2',
        name: 'Spaghetti',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, qui officiis? Ipsam laborum eaque debitis nesciunt pariatur autem, rerum maxime.',
        price: '60฿'
    },
    {
        id: 'food3',
        name: 'Sushi',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, qui officiis? Ipsam laborum eaque debitis nesciunt pariatur autem, rerum maxime.',
        price: '80฿'
    },
    {
        id: 'food4',
        name: 'Salmon',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, qui officiis? Ipsam laborum eaque debitis nesciunt pariatur autem, rerum maxime.',
        price: '85฿'
    }
]

const AvailableMeals = () => {
    const mealsList = MEALS.map((meal) => {
       return <li key={meal.id}>{meal.name}</li>
    })

    return (
        <section>
            <ul>
                {mealsList}
            </ul>
        </section>
    );


}

export default AvailableMeals
