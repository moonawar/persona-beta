import HomeLogo from './items/HomeLogo';
import NavItem from './items/NavItem';
import styles from './NavBar.module.css'

const NavBar = () => {
    return <nav className={styles.navbar}>
        <div className={styles["nav-container"]}>
            <NavItem link="/about">about</NavItem>
            <NavItem link="/projects">projects</NavItem>
            <HomeLogo/>
            <NavItem link="/contacts">contacts</NavItem>
            <NavItem link="/socials">socials</NavItem>
        </div>
    </nav>
}

export default NavBar;