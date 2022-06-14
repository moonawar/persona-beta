import Project from "./Project";
import styles from "./ProjectsRow.module.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState} from "react";

const ProjectsRow = () => {
  const [length, setLength] = useState();
  const [viewWidth, setViewWidth] = useState(0);
  const projectsRow = useRef(null);
  const projectsRowInner = useRef(null);
  
  useEffect(() => {
    setLength(projectsRow.current.scrollWidth - projectsRow.current.offsetWidth);
  }, []);

  return (
    <motion.div className={styles.projectsRow}  whileTap={{cursor: "grabbing"}} ref={projectsRow}>
      <motion.div
        className={styles.projectsRowInner}
        ref={projectsRowInner}
        drag={"x"}
        dragConstraints={{right: 0, left: -(length)}}
      >
        <Project projectId={1} />
        <Project projectId={2} />
        <Project projectId={3} />
        <Project projectId={4} />
        <Project projectId={5} />
      </motion.div>
    </motion.div>
  );
};

export default ProjectsRow;
