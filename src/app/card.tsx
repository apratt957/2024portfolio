import { motion } from "framer-motion"
import styles from "./page.module.css"

type CardProps = {
    dragConstraint: object,
    title: string,
    handleClick: React.MouseEventHandler<HTMLElement>
}

export default function Card(props: CardProps) {
  
    return (
        <motion.article drag dragConstraints={props.dragConstraint} className={styles.card} onClick={props.handleClick}>
            <h1>{props.title}</h1>
        </motion.article>
    );
  }