import styles from "./IntroContent.module.css";
import Image from "next/image";
import profilePic from "../../../public/profpic.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const IntroContent = () => {
  const {width, height} = useWindowDimensions();

  let size = 240;
  if ((width >= 1345) && (height >= 750)){
    size = 360;
  } 
  
  if ((width >= 1900) && (height >= 1050)){
    size = 500;
  }

  return (
    <div className={styles.introContent}>
      <Image
        src={profilePic}
        alt="Picture of Addin Munawwar Yusuf, The Author"
        width={size}
        height={size}
      />
      <h1 className={styles.introName}>Addin Munawwar</h1>
      <p className={styles.introRole}>
        game development • 3d modelling • game music composing • web development
      </p>
    </div>
  );
};

export default IntroContent;
