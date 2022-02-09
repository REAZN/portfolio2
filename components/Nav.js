import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "styles/components/Nav.module.scss";

const variants = {
    index: {
        fontSize: "12vw",
        fontWeight: 900,
        transition: {
            duration: .4
        }
    },
    notIndex: {
        fontSize: "3vw",
        fontWeight: 100,
        transition: {
            duration: .4
        }
    }
}

const pages = ["about", "projects", "experiments"];

export default function Nav() {

    const path = useRouter().pathname;
    const isIndex = path == "/";

    return (
        <AnimatePresence
            initial={false} //this is f'ed
        >
            <motion.header className={`${styles.nav} ${isIndex ? styles.index : styles.notindex}`}
                initial={isIndex ? "notIndex" : "index"}
                animate={isIndex ? "index" : "notIndex"}
                variants={variants}
            >
                <ul>
                    {pages.map((page) => (
                        <li key={page} className={path == `/${page}` ? styles.active : ""}>
                            <Link href={path == `/${page}` ? "/" : `/${page}`} passHref>
                                {page}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.header>
        </AnimatePresence>
    )
}