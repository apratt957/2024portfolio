import Header from "../Header";
import WorkLayout from "../layout";
import styles from "../page.module.css"

export default function KeepingTime() {

  return (
    <WorkLayout>
      <Header backgroundColor="red">Keeping Time</Header>
      <div className={styles.info}>some random info</div>
    </WorkLayout>
  );
}