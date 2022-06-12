import useWindowDimensions from '../../hooks/useWindowDimensions';
import Burger from './items/Burger';
import HomeLogo from './items/HomeLogo';
import NavItem from './items/NavItem';
import styles from './NavBar.module.css'

const NavBar = () => {
    const { height, width } = useWindowDimensions();

    let navItems =         
        <div className={styles["nav-open"]}>
            <NavItem link="/about">about</NavItem>
            <NavItem link="/projects">projects</NavItem>
            <HomeLogo/>
            <NavItem link="/contacts">contacts</NavItem>
            <NavItem link="/socials">socials</NavItem>
        </div>

    if (width <= 740) {
        navItems =         
            <div className={styles["nav-closed"]}>
                <HomeLogo/>
                <Burger/>
            </div>
    }

    return <div className={styles.navbar}>
        {navItems}
    </div>
}

export default NavBar;