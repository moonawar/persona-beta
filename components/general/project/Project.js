import styles from "./Project.module.css";
import Link from "next/link";

const Project = (props) => {
  return (
    <div className={styles["project-container"]}>
      <div className={styles.project}>
        <div className={styles["project-details"]}>
          <h3 className={styles["project-title"]}>Project Title</h3>
          <p className={styles["project-desc"]}>
            description goes here, and probably tag idk. what about longer text.
          </p>
        </div>
      </div>
      <div className={styles["project-meta"]}>
        {/* <p>Tags</p> */}
        <Link href={`/project/${props.projectId}`}>
          <a className={styles.projectLink}>Learn More</a>
        </Link>
      </div>
    </div>
  );
};

export default Project;
