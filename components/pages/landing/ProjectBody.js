import ProjectsRow from "../../general/project/ProjectsRow";
import styles from "./ProjectBody.module.css";

const ProjectBody = (second) => {
  return (
    <div className={styles.projectBody}>
      <div className={styles.filteringSide}>
        <h1>Projects</h1>
        <p>Filter</p>
      </div>
      <div className={styles.projectsSide}>
        <div className={styles.projectList}>
          <h1>Finished Project</h1>
          <ProjectsRow />
        </div>
        <div className={styles.projectList}>
          <h1>Ongoing Project</h1>
          <ProjectsRow />
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
