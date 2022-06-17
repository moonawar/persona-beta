import styles from "./Burger.module.css";
import Image from "next/image";
import burgerImg from "../../../../public/burger.png";

const Burger = (props) => {
  return (
    <div className={`${styles.burger} ${styles[`${props.display}`]}`}>
      <Image
        src={burgerImg}
        alt="Burger Navigation Icon"
        onClick={props.handleClick}
      />
    </div>
  );
};

export default Burger;
