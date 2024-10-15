import { motion } from "framer-motion";
import styles from "./page.module.css";

type CardProps = {
  xAnimate: number;
  yAnimate: number;
  dragConstraint: object;
  title: string;
  description: string;
  backgroundColor: string;
  color: string;
  cardRef: (el: HTMLDivElement) => void;
  onFocus: () => void;
}

export default function Card(props: CardProps) {
  const handleCardClick = () => {
    window.location.href = `/${props.title.toLowerCase().split(" ").join("-")}`;
  };
  return (
    <motion.article
      ref={props.cardRef}
      onHoverStart={props.onFocus}
      onTapStart={props.onFocus}
      initial={{ opacity: 0 }}
      animate={{ x: props.xAnimate, y: props.yAnimate, opacity: 1 }}
      drag
      dragConstraints={props.dragConstraint}
      whileHover={{
        scale: 1.05,
        backgroundColor: props.backgroundColor,
        color: props.color,
        // zIndex: 2,
        border: "none",
        transition: { duration: 0.3 },
      }}
      whileTap={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        border: "none",
        // zIndex: 2,
        transition: { duration: 0.3 },
      }}
      className={styles.card}
      style={{ border: `2.5px solid ${props.backgroundColor}` }}
    >
      <div className={styles.h1Container}>
        <h1 className={styles.cardDescription} onClick={handleCardClick}>
          {props.description}
        </h1>
      </div>
      <div className={styles.titleContainer}>
        <p className={styles.cardTitle}>{props.title}</p>
      </div>
    </motion.article>
  );
}
