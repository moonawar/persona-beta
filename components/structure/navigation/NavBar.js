import { useEffect, useState } from "react";
import Backdrop from "../../general/UI/Backdrop";
import Portal from "../../hooks/Portal";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Burger from "./items/Burger";
import BurgerMenu from "./items/BurgerMenu";
import HomeLogo from "./items/HomeLogo";
import NavItem from "./items/NavItem";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <div className={styles.navbar}>
      <div className={styles["nav"]}>
        <NavItem link="/about" display="responsive">about</NavItem>
        <NavItem link="/projects" display="responsive">projects</NavItem>
        <HomeLogo />
        <NavItem link="/contacts" display="responsive">contacts</NavItem>
        <NavItem link="/socials" display="responsive">socials</NavItem>
        <Burger display="responsive" handleClick={handleBurgerClick}/>
        {isBurgerOpen && (
          <Portal>
            <Backdrop />
            <BurgerMenu handleClick={handleBurgerClick} state={isBurgerOpen}/>
          </Portal>
        )}
      </div>
    </div>
  );
};

export default NavBar;
