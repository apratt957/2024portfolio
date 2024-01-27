'use client'

import { motion } from "framer-motion"
import { useRef } from "react"
import Card from "./card"
import styles from "./page.module.css"

export default function Home() {

  const constraintsRef = useRef(null)

  return (
    <motion.main ref={constraintsRef}  className={styles.main}>
      <Card dragConstraint={constraintsRef} />
      <Card dragConstraint={constraintsRef} />
      <Card dragConstraint={constraintsRef} />
    </motion.main>
  );
}
