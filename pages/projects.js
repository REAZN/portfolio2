import styles from "styles/pages/projects.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { Nav } from "components";

const projects = [
    {
        name: "PHONE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus placerat turpis et mauris sit. Blandit risus, consequat, in odio sem eu tincidunt. Id lorem consequat arcu, ullamcorper odio. Laoreet enim, et, malesuada eget praesent. ",
        color: "#A21C2C",
        link: "something.com"
    },
    {
        name: "HOME",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus placerat turpis et mauris sit. Blandit risus, consequat, in odio sem eu tincidunt. Id lorem consequat arcu, ullamcorper odio. Laoreet enim, et, malesuada eget praesent. ",
        color: "#4B72BD",
        link: ""
    },
    {
        name: "E.T",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id lacus placerat turpis et mauris sit. Blandit risus, consequat, in odio sem eu tincidunt. Id lorem consequat arcu, ullamcorper odio. Laoreet enim, et, malesuada eget praesent. ",
        color: "#a21c2c",
        link: ""
    }
]

export default function About() {
    return (
        <>
            <Nav />
            <motion.section className={styles.projects}>
                <motion.div className={styles.content}>
                    <motion.div className={styles.cards}>
                        {projects.map((project) => (
                            <motion.div key={project.name} className={styles.card}
                                style={{
                                    background: project.color
                                }}>
                                <span className={styles.title}>{project.name}</span>
                                <p>{project.description}</p>
                                <span className={styles.link}>{project.link}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>
            <div className={styles["test"]}><Link href="/"><a>Projects</a></Link></div>
        </>
    )
}
