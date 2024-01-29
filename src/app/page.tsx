'use client'

import { motion } from "framer-motion"
import { Fragment, useRef, useState } from "react"
import { work } from "./work"
import Card from "./card"
import styles from "./page.module.css"

export default function Home() {

  const [isPopped, setIsPopped] = useState(false)

  const constraintsRef = useRef(null)

  const handleCardClick = () => {
    if (!isPopped) setIsPopped(true)
  }

  return (
    <motion.main ref={constraintsRef}  className={styles.main}>
      <header>
        <h1>My name is Andrew Pratt. I'm a developer/designer and game creator living in Chicago. I value clean design and user interfaces that bring joy and utility to the web.</h1>
      </header>
      {!isPopped ? <Card isPopped={isPopped} dragConstraint={constraintsRef} description={'My work?'} handleClick={handleCardClick} /> :
        <Fragment>
          {work.map((project, index) => {
            return <Card key={index}
              isPopped={isPopped}
              dragConstraint={constraintsRef}
              title={project.title}
              description={project.description}
              xAnimate={project.xAnimate}
              yAnimate={project.yAnimate}
              handleClick={handleCardClick} />
          })}
        </Fragment>
      }
    </motion.main>
  );
}
