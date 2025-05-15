'use client';
import React from 'react'
import styles from './AboutSection.module.css'
import { caveatFont, interFont } from '@/fonts'
import Button from '../button/Button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';

function AboutSection() {
  return (
    <>
      <section id='about' className={styles.about}>
        <motion.div className={styles.aboutLeftDiv}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <h1 className={caveatFont.className}>Sania Tariq</h1>
          <p className={caveatFont.className}>Freelance Web Developer</p>
          <h2 className={`${styles.detailsText} ${interFont.className}`}>I am a passionate junior full-stack developer specializing in Next.js and React frameworks for building dynamic and responsive web applications. Alongside frontend development, I work with Streamlit to create interactive data apps. Currently, I am expanding my backend skills by learning Python and FastAPI to build efficient and scalable APIs. I am eager to grow my expertise and contribute to impactful projects using modern web technologies.</h2>
            <Link href={"#contact"}>
          <Button text={"Contact Me"} /></Link>
        </motion.div>

        <motion.div className={styles.aboutRightDiv}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Image src={"/image/profile.png"} alt={"profile picture"} width={350} height={459.38} className={styles.img}></Image>
        </motion.div>
      </section>

    </>
  )
}

export default AboutSection;