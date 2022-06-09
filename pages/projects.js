import styles from "styles/pages/Projects.module.scss";
import { motion } from "framer-motion";
import { Nav } from "components";
import { useState, useRef, createRef, useEffect } from "react";
import { Link } from "react-scroll"

export default function Projects() {

    const [projects, setProject] = useState([
        {
            name: "PHONE",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus placerat turpis et mauris sit. Blandit risus, consequat, in odio sem eu tincidunt. Id lorem consequat arcu, ullamcorper odio. Laoreet enim, et, malesuada eget praesent. ",
            color: "#b10026",
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

    const ref = useRef(Array(projects.length).fill(createRef()));

    const scroll = (index) => {
        // ref.current[index]?.current.scrollIntoView({ behavior: "smooth", block: "start" });
        // console.log(ref.current[index], index)
    }

    useEffect(() => scroll, [])

    return (
        <>
            <Nav />
            <motion.section className={styles.projects}>
                <motion.div className={styles.content}>
                    <motion.div className={styles.cards}>
                        {projects.map((project, index) => (
                            <Link to={index} name={index} smooth={true} offset={-200}
                                key={project.name}>
                                <motion.div
                                    key={project.name}
                                    ref={ref.current[index]}
                                    className={`${styles.card} ${project.active ? styles.active : ""}`}
                                    // transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    onClick={() => {
                                        if (!project.active) { scroll(index); }
                                        // console.log(ref)
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
                                    <motion.div
                                        // layoutId={project.name}
                                        animate={project.active ? { marginTop: "-10%" } : ""}
                                        className={`${styles.details} ${project.active ? styles.detailsActive : ""}`}
                                        transition={{ type: "linear", duration: 0.3 }}
                                    >
                                        <span className={styles.title}>{project.name}</span>
                                        <p className={styles.description}>{project.description}</p>
                                        <span className={styles.link}>{project.link}</span>
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
