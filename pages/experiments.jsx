import styles from "styles/pages/Experiments.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { Nav } from "components";
import Image from "next/image";
import config from "config";

export default function About() {
    return (
        <>
            <Nav />
            <motion.section className={styles.experiments}
                initial={{ right: "-100%" }}
                animate={{ right: "0%" }}
                exit={{ right: "-100%" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                <div className={styles.content}>

                    <motion.ul className={styles.cards}
                        initial={{ marginTop: "120%" }}
                        animate={{ marginTop: "0%" }}
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                    >
                        {config.experiments.slice(0, config.experiments.length / 2)
                            .map((experiment, index) => (
                                <li key={experiment.title} className={styles.card}>
                                    <a href={experiment.url} target="_blank" rel="noreferrer" key={experiment.title}>
                                        <div className={styles.imagecontainer}>
                                            <img className={styles.image} src={`/images/codepen/${experiment.image}`} alt={experiment.name} />
                                        </div>
                                        <div className={styles.text}>
                                            <span className={styles.number}>
                                                experiment {(index + 1) < 10 ? "0" + (index + 1) : (index + 1)}
                                            </span>
                                            <span className={styles.experiment}>
                                                {experiment.title}
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </motion.ul>
                    <motion.ul className={styles.cards}
                        initial={{ marginTop: "-120%" }}
                        animate={{ marginTop: "0%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {config.experiments.slice(config.experiments.length / 2, config.experiments.length)
                            .map((experiment, index) => (
                                <li key={experiment.title} className={styles.card}>
                                    <a href={experiment.url} target="_blank" rel="noreferrer" key={experiment.title}>
                                        <div className={styles.imagecontainer}>
                                            <img className={styles.image} src={`/images/codepen/${experiment.image}`} alt={experiment.title} />
                                        </div>
                                        <div className={styles.text}>
                                            <span className={styles.number}>
                                                experiment {(index + Math.round(config.experiments.length / 2)) < 10
                                                    ? "0" + (index + Math.round(config.experiments.length / 2))
                                                    : (index + Math.round(config.experiments.length / 2))}
                                            </span>
                                            <span className={styles.experiment}>
                                                {experiment.title}
                                            </span>
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </motion.ul>
                </div>
            </motion.section>
            <div className={styles["test"]}><Link href="/"><a>EXPERIMENTS</a></Link></div>
        </>
    )
}
