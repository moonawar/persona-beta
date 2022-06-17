import Burger from './Burger';
import styles from './BurgerMenu.module.css'
import NavItem from './NavItem';

const BurgerMenu = (props) => {
    const burgerState = props.state ? styles.open : styles.close;

    return(
        <div className={`${styles.burgerMenu} ${burgerState}`}>
            <div className={styles["burgerMenu-burger"]}>
                <Burger handleClick={props.handleClick} display="always"/>
            </div>
            <div className={styles["burgerMenu-content"]}>
                <NavItem link="/about" display="always">about</NavItem>
                <NavItem link="/projects" display="always">projects</NavItem>
                <NavItem link="/contacts" display="always">contacts</NavItem>
                <NavItem link="/socials" display="always">socials</NavItem>
            </div>
        </div>
    );
}

export default BurgerMenu;