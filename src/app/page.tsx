'use client'

import { motion } from "framer-motion"
import { useRef } from "react"
import styles from "./page.module.css"

export default function Home() {

  const constraintsRef = useRef(null)

  return (
    <motion.main ref={constraintsRef}  className={styles.main}>
      <motion.div drag dragConstraints={constraintsRef} className={styles.card}>A card</motion.div>
      <motion.div drag dragConstraints={constraintsRef} className={styles.card}>A card</motion.div>
      <motion.div drag dragConstraints={constraintsRef} className={styles.card}>A card</motion.div>
    </motion.main>
  );
}
