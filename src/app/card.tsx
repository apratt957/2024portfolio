import { motion } from "framer-motion";
import styles from "./page.module.css";

type CardProps = {
  xAnimate: number;
  yAnimate: number;
  dragConstraint: object;
  title: string;
  description: string;
  backgroundColor: string;
};

export default function Card(props: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ x: props.xAnimate, y: props.yAnimate, opacity: 1 }}
      drag
      dragConstraints={props.dragConstraint}
      whileHover={{
        scale: 1.05,
        backgroundColor: props.backgroundColor,
        color: "white",
        zIndex: 2,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        backgroundColor: props.backgroundColor,
        color: "white",
        zIndex: 2,
        transition: { duration: 0.3 },
      }}
      className={styles.card}
    >
      <div className={styles.h1Container}>
        <h1 className={styles.cardDescription}>{props.description}</h1>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.cardTitle}>{props.title}</p>
      </div>
    </motion.article>
  );
}
