'use client';

import { motion } from "framer-motion"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.div drag className={styles.card}>A card</motion.div>
    </main>
  );
}
