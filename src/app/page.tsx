'use client'

import { motion } from "framer-motion"
import { Fragment, useRef, useState } from "react"
import Card from "./card"
import styles from "./page.module.css"

export default function Home() {

  const [isPopped, setIsPopped] = useState(false)

  const constraintsRef = useRef(null)

  const handleCardClick = () => {
    if (!isPopped) setIsPopped(true)
    console.log('hello')
  }

  return (
    <motion.main ref={constraintsRef}  className={styles.main}>
      <header>
        <h1>Hello! My name is Andrew Pratt. I'm a developer, game creator, and designer/illustrator living in Chicago. I value simple, clean designs and user interfaces and I love working on both the design and development sides of projects.</h1>
      </header>
      {!isPopped ? <Card dragConstraint={constraintsRef} title={'My work?'} handleClick={handleCardClick} /> :
        <Fragment>
          <Card dragConstraint={constraintsRef} title={'My work!'} handleClick={handleCardClick} />
          <Card dragConstraint={constraintsRef} title={'My work!'} handleClick={handleCardClick} />
          <Card dragConstraint={constraintsRef} title={'My work!'} handleClick={handleCardClick} />
        </Fragment>
      }
    </motion.main>
  );
}
