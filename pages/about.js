import styles from "styles/pages/about.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { Nav } from "components";

export default function About() {
    return (
        <>
            <Nav />
            <motion.section className={styles.about}
                initial={{ right: "-100%" }}
                animate={{ right: "0%" }}
                exit={{ right: "-100%" }}
                transition={{ duration: .6, ease: "easeInOut" }}
            >
                <div></div>
            </motion.section>
            <div className={styles["test"]}><Link href="/"><a>ABOUT</a></Link></div>
        </>
    )
}
