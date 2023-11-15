import HeaderCartButton from './HeaderCartButton';
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return ( 
        <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onShowCart={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='meals' />
        </div>
    </>);
}
 
export default Header;