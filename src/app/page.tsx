"use client";

import { motion } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { work } from "./work";
import { colors, getRandom } from "@/helpers";
import Card from "./card";
import styles from "./page.module.css";

export default function Home() {
  const [isPopped, setIsPopped] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  const constraintsRef = useRef(null);

  const handleCardClick = () => {
    if (!isPopped) setIsPopped(true);
  };

  return (
    <motion.main ref={constraintsRef} className={styles.main}>
      <header>
        <h1>
          My name is Andrew Pratt. I'm a developer/designer and game creator
          living in Chicago. I like to make toys and tools online.
        </h1>
      </header>
      {!isPopped ? (
        <Card
          isPopped={isPopped}
          dragConstraint={constraintsRef}
          description={"My work?"}
          backgroundColor={colors.pink}
          handleClick={handleCardClick}
        />
      ) : (
        <Fragment>
          {work.map((project, index) => {
            if (project.title !== "My Work")
              return (
                <Card
                  key={index}
                  isPopped={isPopped}
                  dragConstraint={constraintsRef}
                  title={project.title}
                  description={project.description}
                  xAnimate={getRandom(windowWidth)}
                  yAnimate={getRandom(windowHeight)}
                  backgroundColor={project.backgroundColor}
                  handleClick={handleCardClick}
                />
              );
          })}
        </Fragment>
      )}
    </motion.main>
  );
}
