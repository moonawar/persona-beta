import styles from "./Burger.module.css";
import Image from "next/image";
import burgerImg from "../../../../public/burger.png";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import Portal from "../../../hooks/Portal";
import Backdrop from "../../../general/UI/Backdrop";
import BurgerMenu from "./BurgerMenu";

const Burger = (second) => {
    const {height, width} = useWindowDimensions();
    const size = width >= 480 ? 24 : 20;

  return (
    <div className={styles.burger}>
      <Image
        src={burgerImg}
        alt="Burger Navigation Icon"
        width={size}
        height={size}
      />
      {/* <Portal>
        <Backdrop/>
        <BurgerMenu/>
      </Portal> */}
    </div>
  );
};

export default Burger;
