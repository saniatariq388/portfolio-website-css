import React from 'react'
import styles from "./Portfolio.module.css"
import PortfolioCard from "./portfolio-cards/PortfolioCard";
import { caveatFont, interFont } from '@/fonts'

function Portfolio() {
    return (
        <>
            <section id='portfolio' className={styles.portfolio}>
                <h1 className={caveatFont.className}>
                    <span>M</span>y {" "}
                    <span>L</span>ast {" "}
                    <span>W</span>ork
                </h1>

                <p className={interFont.className}>In my recent projects, I developed a fast Q-commerce website delivering a seamless shopping experience. I built interactive data analytics applications using Streamlit that provide real-time insights. Additionally, I created several CLI tools to automate workflows and improve efficiency. I designed and deployed a modern blog website using Next.js and React to share technical content. Throughout these projects, I extensively used Python for backend development and scripting.</p>

                <div className={styles.myWork}>
                    <PortfolioCard/>
                </div>

            </section>
        </>
    )
}

export default Portfolio;