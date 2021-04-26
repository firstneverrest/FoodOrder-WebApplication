import react, {Fragment} from 'react'

import mealsImage from '../../assets/img/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className="Header__nav">
                <h1 className="Header__nav-logo">Good Meals</h1>
                <HeaderCartButton />
            </header>
            <div className="Header__img">
                <div className="Header__img-overlay"></div>
                <div className="Header__img-text">Food Order Application</div>
                <img className="Header__img-img" src={mealsImage} alt="plenty of delicious food"/>
            </div>
        </Fragment>
    )
}

export default Header