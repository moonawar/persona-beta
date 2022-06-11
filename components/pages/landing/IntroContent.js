import styles from "./IntroContent.module.css";
import Image from "next/image";
import profilePic from "../../../public/profpic.png";

const IntroContent = (second) => {
  return (
    <div className={styles.introContent}>
      <Image
        src={profilePic}
        alt="Picture of Addin Munawwar Yusuf, The Author"
        width={240}
        height={240}
      />
      <h1 className={styles.introName}>Addin Munawwar</h1>
      <p className={styles.introRole}>
        game development • 3d modelling • game music composing • web development
      </p>
    </div>
  );
};

export default IntroContent;
