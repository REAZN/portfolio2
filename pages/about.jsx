import styles from "styles/pages/about.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Nav, GitHub, CodePen, LinkedIn, Twitter } from "components";
import config from "config";

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
                    <motion.div className={styles.line}
                        inital={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        exit={{ width: "0%" }}
                        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                    />
                    <motion.p
                        initial={{ x: 1000 }}
                        animate={{ x: 0 }}
                        exit={{ x: 1000 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        {config.about}
                    </motion.p>
                    <motion.div
                        initial={{ x: 1000 }}
                        animate={{ x: 0 }}
                        exit={{ x: 1000 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                        <a href={`mailto:${config.social.email}`}>{config.social.email}</a>
                        <span>{config.social.number}</span>
                    </motion.div>
                </motion.div>
                <motion.div className={styles.social}
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    exit={{ x: 1000 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    <motion.div className={styles.line}
                        inital={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        exit={{ height: "0%" }}
                        transition={{ delay: 1, duration: 0.5 }}
                    />
                    <motion.ul className={styles.links}>
                        <li><a href={`https://github.com/${config.social.github}`} target="_blank" rel="noreferrer"><GitHub fill="#000" size={40}/></a></li>
                        <li><a href={`https://codepen.io/${config.social.codepen}`} target="_blank" rel="noreferrer"><CodePen fill="#000" size={40}/></a></li>
                        <li><a href={`https://linkedin.com/in/${config.social.linkedin}`} target="_blank" rel="noreferrer"><LinkedIn fill="#000" size={40}/></a></li>
                        <li><a href={`https://twitter.com/${config.social.twitter}`} target="_blank" rel="noreferrer"><Twitter fill="#000" size={40}/></a></li>
                    </motion.ul>
                    <motion.div className={styles.line}
                        inital={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        exit={{ height: "0%" }}
                        transition={{ delay: 1, duration: 0.5 }}
                    />
                </motion.div>
            </motion.section>
        </>
    )
}
