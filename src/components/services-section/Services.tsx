import React from 'react';
import styles from "./Services.module.css";
import ServicesCard from "./services-card/ServicesCard";
import { caveatFont, interFont } from '@/fonts';

function Services() {
    return (
        <>
            <section id="service" className={styles.services}>
                <h1 className={caveatFont.className}>
                    <span>W</span>hat {" "}
                    <span>I</span> {" "}
                    <span>D</span>o{" "}
                    <span>F</span>or{" "}
                    <span>C</span>lients
                </h1>

                <p className={interFont.className}>
                As a junior full-stack developer, I build engaging and responsive web applications using Next.js and React. I also develop interactive data-driven apps with Streamlit. Currently, I am enhancing my backend skills by learning Python and FastAPI to create robust and efficient APIs. I am dedicated to delivering high-quality code and constantly improving my abilities to contribute effectively to modern development projects.</p>

                <div className={styles.servicesCardDiv}>
                    <ServicesCard/>
                </div>

            </section>
        </>
    );
}

export default Services;