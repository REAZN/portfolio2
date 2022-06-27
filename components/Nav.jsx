import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styles from "styles/components/Nav.module.scss";
import { Signature } from "components";

const pages = ["about", "projects", "experiments"];

export default function Nav() {

    const path = useRouter().pathname;
    const isIndex = path === "/";

    return (
        <header className={styles.nav}>
            <div className={styles.signature}>
                <Signature fill="#fff" />
            </div>
            <motion.ul className={`${isIndex ? styles.index : styles.notindex}`}
                layoutId="header"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            >
                {pages.map((page) => (
                    <li key={page} className={path === `/${page}` ? styles.active : ""}>
                        <Link href={path === `/${page}` ? "/" : `/${page}`} passHref>
                            {page}
                        </Link>
                    </li>
                ))}
            </motion.ul>
        </header>
    )
}
