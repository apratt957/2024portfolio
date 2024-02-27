"use client";

import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { work } from "./work";
import { getRandom, colors } from "@/helpers";
import Card from "./card";
import styles from "./page.module.css";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  const constraintsRef = useRef(null);

  return (
    <motion.main ref={constraintsRef} className={styles.main}>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h1>
          My name is Andrew Pratt. I&apos;m a developer/designer and game
          creator living in Chicago. I like to make toys and tools online.
        </h1>
        <div>
          {" "}
          <a
            className={styles.link}
            href="https://github.com/apratt957"
            target="_blank"
          >
            Github
          </a>{" "}
          |{" "}
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/andrew-pratt957/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </motion.header>
      <Fragment>
        {work.map((project, index) => (
          <Card
            key={index}
            dragConstraint={constraintsRef}
            title={project.title}
            description={project.description}
            xAnimate={getRandom(windowWidth)}
            yAnimate={getRandom(windowHeight)}
            backgroundColor={project.backgroundColor}
            color={project.color}
          />
        ))}
      </Fragment>
    </motion.main>
  );
}
