import styles from "styles/pages/projects.module.scss";
import { motion } from "framer-motion";
import { Nav } from "components";
import { useState } from "react";

export default function About() {


    const [projects, setProject] = useState([
        {
            name: "PHONE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus placerat turpis et mauris sit. Blandit risus, consequat, in odio sem eu tincidunt. Id lorem consequat arcu, ullamcorper odio. Laoreet enim, et, malesuada eget praesent. ",
            color: "#A21C2C",
            link: "something.com",
            active: false
        },
        {
            name: "HOME",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus placerat turpis et mauris sit. Blandit risus, consequat, in odio sem eu tincidunt. Id lorem consequat arcu, ullamcorper odio. Laoreet enim, et, malesuada eget praesent. ",
            color: "#4B72BD",
            link: "",
            active: false
        },
        {
            name: "E.T",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus placerat turpis et mauris sit. Blandit risus, consequat, in odio sem eu tincidunt. Id lorem consequat arcu, ullamcorper odio. Laoreet enim, et, malesuada eget praesent. ",
            color: "#a21c2c",
            link: "",
            active: false
        }
    ]);

    return (
        <>
            <Nav />
            <motion.section className={styles.projects}>
                <motion.div className={styles.content}>
                    <motion.div className={styles.cards}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.name}
                                className={`${styles.card} ${project.active ? styles.active : ""}`}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                onClick={() => {
                                    project.active = !project.active;
                                    setProject([...projects])
                                }}
                            >
                                <motion.div
                                    layoutId={project.name}
                                    className={`${project.active ? styles.backgroundActive : styles.background}`}
                                    style={{ background: project.color, zIndex: -1 + -index }}
                                    // animation={{}}
                                    // animate={project.active ? { originX: 0, width: "100vw" } : { originX: 1, width: "100%" }}
                                    animate={project.active ? { borderRadius: ["0px", "50px", "100px", "50px", "0px"] } : { borderRadius: ["100px", "75px", "50px", "25px", "0px"] }}
                                    transition={{ type: "linear", duration: 0.3 }}
                                />
                                <span className={styles.title}>{project.name}</span>
                                <p>{project.description}</p>
                                <span className={styles.link}>{project.link}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}
