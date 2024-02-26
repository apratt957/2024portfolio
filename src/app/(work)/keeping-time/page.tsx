import Header from "../Header";
import WorkLayout from "../layout";
import styles from "../page.module.css";
import { work } from "@/app/work";
import { findCurrentProject } from "@/helpers";

export default function KeepingTime() {
  const projectName = "Keeping Time";
  const currentProject = findCurrentProject(projectName, work) as {
    backgroundColor: string;
  };
  return (
    <WorkLayout>
      <div className={styles.container}>
        <Header backgroundColor={currentProject.backgroundColor} color="white">
          Keeping Time
        </Header>
        <div className={styles.content}>some random info</div>
      </div>
    </WorkLayout>
  );
}
