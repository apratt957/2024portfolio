"use client";

import styles from "../page.module.css";
import { work } from "@/app/work";
import { findCurrentProject } from "@/helpers";
import Image from "next/image";

export default function KeepingTime() {
  const handleBackButtonClick = () => {
    window.history.back();
  };

  const projectName = "Keeping Time";
  const currentProject = findCurrentProject(projectName, work) as {
    title: string;
    description: string;
    backgroundColor: string;
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={handleBackButtonClick}>
        <Image src="/back.svg" alt="back" height={80} width={80} />
      </div>
      <header
        className={styles.workHeader}
        style={{
          backgroundColor: currentProject.backgroundColor,
          color: "white",
        }}
      >
        <h1>{currentProject.title}</h1>
        <div>{currentProject.description}</div>
      </header>
      <div className={styles.content}>some random info</div>
    </div>
  );
}
