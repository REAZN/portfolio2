import styles from "styles/pages/projects.module.scss";
import { motion } from "framer-motion";
import { Nav } from "components";
import { useState } from "react";
import { Link } from "react-scroll"
import config from "config";

export default function Projects() {

    const [projects, setProject] = useState(config.projects);

    return (
        <>
            <Nav blendOverride={true}/>
            <motion.section className={styles.projects}>
                <motion.div className={styles.content}>
                    <motion.div className={styles.cards}>
                        {projects.map((project, index) => (
                            <Link to={index} name={index} smooth={true} offset={-200}
                                key={project.title}>
                                <motion.div
                                    key={project.title}
                                    className={`${styles.card} ${project.active ? styles.active : ""}`}
                                    // transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    onClick={() => {
                                        project.active = !project.active;
                                        setProject([...projects])
                                    }}
                                >
                                    <motion.div
                                        layoutId={project.title}
                                        className={`${project.active ? styles.backgroundActive : styles.background}`}
                                        style={{ background: project.color, zIndex: -1 + -index }}
                                        // animation={{}}
                                        // animate={project.active ? { originX: 0, width: "100vw" } : { originX: 1, width: "100%" }}
                                        animate={project.active ? { borderRadius: ["0px", "50px", "100px", "150px", "200px", "150px", "100px", "50px", "0px"] } : { borderRadius: "0px" }}
                                        transition={{ type: "linear", duration: 0.3 }}
                                    />
                                    <motion.div
                                        // layoutId={project.name}
                                        animate={project.active ? { marginTop: "-10%", width: "1200px", height: "800px", marginLeft: "-5vw"} : ""}
                                        className={`${styles.details} ${project.active ? styles.detailsActive : ""}`}
                                        transition={{ type: "linear", duration: 0.3 }}
                                    >
                                        <span className={styles.title}>{project.title.toUpperCase()}</span>
                                        <p className={styles.description}>{project.description}</p>
                                        <div className={styles.tech}>
                                            {project.technologies.map((tech, index) => (
                                                <span key={index}>{tech}</span>
                                            ))}
                                        </div>
                                        <div className={styles.links}>
                                            <a href={project.demo} className={styles.link}>{project.demo.replace(/^https?:\/\//, "")}</a>
                                            <a href={project.github} className={styles.link}>GitHub</a>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}
