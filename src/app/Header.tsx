import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/(work)/page.module.css";
import Image from "next/image";

interface HeaderProps {
  currentProject: {
    title: string;
    description: string;
    githubLink: string;
    githubLinkDescription: string;
    backgroundColor: string;
    color: string;
  };
}

const Header: React.FC<HeaderProps> = ({ currentProject }) => {
  const handleBackButtonClick = () => {
    window.location.href = "/";
  };
  return (
    <header
      className={styles.workHeader}
      style={{
        backgroundColor: currentProject.backgroundColor,
        color: currentProject.color,
      }}
    >
      <motion.div
        className={styles.back}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        onClick={handleBackButtonClick}
      >
        <Image src="/back.svg" alt="back" height={80} width={80} />
      </motion.div>
      <h1 className={styles.headerTitle}>{currentProject.title}</h1>
      <div>{currentProject.description}</div>
      <a
        className={styles.githubLink}
        href={currentProject.githubLink}
        target="_blank"
        style={{ color: currentProject.color }}
      >
        {currentProject.githubLinkDescription}
      </a>
    </header>
  );
};

export default Header;
