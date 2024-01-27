import { motion } from "framer-motion"
import styles from "./page.module.css"

interface CardProps {
    dragConstraint: object
}

export default function Card(props: CardProps) {
  
    return (
        <motion.div drag dragConstraints={props.dragConstraint} className={styles.card}>A card</motion.div>
    );
  }