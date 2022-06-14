import styles from "./Project.module.css";
import Link from "next/link";

const Project = (props) => {
  return (
    <div className={styles["project-container"]}>
      <div className={styles.project}></div>
      <Link href={`/project/${props.projectId}`}>
        <a className={styles.projectLink}>Learn More</a>
      </Link>
    </div>
  );
};

export default Project;
