import styles from "styles/pages/experiments.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { Nav } from "components";

export default function About() {
    return (
        <>
            <Nav />
            <div className={styles["test"]}><Link href="/"><a>EXPERIMENTS</a></Link></div>
        </>
    )
}
