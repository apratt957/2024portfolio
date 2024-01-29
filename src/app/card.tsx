import { motion } from "framer-motion"
import styles from "./page.module.css"

type CardProps = {
    isPopped: boolean,
    dragConstraint: object,
    title: string,
    handleClick: React.MouseEventHandler<HTMLElement>
}

export default function Card(props: CardProps) {
  
    return (
        <motion.article
            animate={props.isPopped ? { x: 100, y: -50 } : {}}
            drag
            dragConstraints={props.dragConstraint}
            className={styles.card}
            onClick={props.handleClick}>
            <h1>{props.title}</h1>
        </motion.article>
    );
  }