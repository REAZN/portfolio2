import styles from "styles/pages/About.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "components";

export default function About() {
    return (
        <>
            <Nav />
            <motion.section className={styles.about}
                initial={{ right: "-100%" }}
                animate={{ right: "0%" }}
                exit={{ right: "-100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <motion.div className={styles.content}
                    initial={{ right: "-100%" }}
                    animate={{ right: "0%" }}
                    exit={{ right: "-100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <h1>THE ABOUT SECTION</h1>
                    <motion.p
                        initial={{ x: 1000 }}
                        animate={{ x: 0 }}
                        exit={{ x: 1000 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus placerat turpis et mauris sit. Blandit risus, consequat, in odio sem eu tincidunt. Id lorem consequat arcu, ullamcorper odio. Laoreet enim, et, malesuada eget praesent. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus placerat turpis et mauris sit. Blandit risus, consequat, in odio sem eu tincidunt.
                    </motion.p>
                    <motion.div
                        initial={{ x: 1000 }}
                        animate={{ x: 0 }}
                        exit={{ x: 1000 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        <span>contact@lewisthompson.com</span>
                        <span>+44 7891269216</span>
                    </motion.div>
                </motion.div>
            </motion.section>
            <div className={styles["test"]}><Link href="/"><a>ABOUT</a></Link></div>
        </>
    )
}
