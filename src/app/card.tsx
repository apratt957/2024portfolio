import { motion } from "framer-motion"
import styles from "./page.module.css"

type CardProps = {
    xAnimate?: number,
    yAnimate?: number,
    isPopped: boolean,
    dragConstraint: object,
    title?: string,
    description: string,
    handleClick: React.MouseEventHandler<HTMLElement>
}

export default function Card(props: CardProps) {
  
    return (
        <motion.article
            animate={props.isPopped ? { x: props.xAnimate, y: props.yAnimate } : {}}
            drag
            dragConstraints={props.dragConstraint}
            className={styles.card}
            onClick={props.handleClick}
        >
            <h1>{props.description}</h1>
            <p>{props.title}</p>
        </motion.article>
    );
  }