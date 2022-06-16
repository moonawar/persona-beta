import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Burger from "./items/Burger";
import HomeLogo from "./items/HomeLogo";
import NavItem from "./items/NavItem";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["nav"]}>
        <NavItem link="/about">about</NavItem>
        <NavItem link="/projects">projects</NavItem>
        <HomeLogo />
        <NavItem link="/contacts">contacts</NavItem>
        <NavItem link="/socials">socials</NavItem>
        <Burger />
      </div>
    </div>
  );
};

export default NavBar;
