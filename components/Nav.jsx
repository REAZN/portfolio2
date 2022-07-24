import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import styles from "styles/components/Nav.module.scss";
import { Signature, Meta } from "components";

const pages = ["about", "projects", "experiments"];

export default function Nav({blendOverride = false}) {

    const path = useRouter().pathname;
    const isIndex = path === "/";

    return (
        <>
        <Meta/>
            <header className={styles.nav}>
                <Link href={"/"}>
                    <a className={styles.signature} style={blendOverride ? {mixBlendMode: "normal"} : {}}>
                        <Signature fill="#fff" />
                    </a>
                </Link>
                <motion.ul className={`${isIndex ? styles.index : styles.notindex}`} style={blendOverride ? {mixBlendMode: "normal"} : {}}
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
        </>
    )
}
