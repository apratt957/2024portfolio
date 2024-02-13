import { motion } from "framer-motion";
import styles from "./page.module.css";

type CardProps = {
  xAnimate?: number;
  yAnimate?: number;
  isPopped: boolean;
  dragConstraint: object;
  title?: string;
  description: string;
  backgroundColor: string;
  handleClick: React.MouseEventHandler<HTMLElement>;
};

export default function Card(props: CardProps) {
  return (
    <motion.article
      animate={props.isPopped ? { x: props.xAnimate, y: props.yAnimate } : {}}
      drag
      dragConstraints={props.dragConstraint}
      whileHover={{
        scale: 1.05,
        backgroundColor: props.backgroundColor,
        color: "white",
        transition: { duration: 0.3 },
      }}
      className={styles.card}
      onClick={props.handleClick}
    >
      <h1>{props.description}</h1>
      <p>{props.title}</p>
    </motion.article>
  );
}
