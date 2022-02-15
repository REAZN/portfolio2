import styles from "styles/pages/projects.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { Nav } from "components";

export default function About() {
    return (
        <>
            <Nav />
            <motion.section className={styles.projects}>

            </motion.section>
            <div className={styles["test"]}><Link href="/"><a>Projects</a></Link></div>
        </>
    )
}
