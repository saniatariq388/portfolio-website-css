import React from 'react'
import styles from './AboutSection.module.css'
import { caveatFont, interFont } from '@/fonts'
import Button from '../button/Button'
import Image from 'next/image'

function AboutSection() {
  return (
  <>
  <section className={styles.about}>
    <div className={styles.aboutLeftDiv}>
        <h1 className={caveatFont.className}>Sania Tariq</h1>
        <p className={caveatFont.className}>Freelance Web Developer</p>
        <h2 className={`${styles.detailsText} ${interFont.className}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, dolorum odio magni possimus corrupti molestiae labore voluptatum ut autem deleniti facilis tempora commodi dolores debitis repellendus excepturi nisi? Quisquam suscipit iste facere molestiae saepe voluptates.</h2>

        <Button text={"Contact Me"}/>
    </div>

    <div className={styles.aboutRightDiv}>
        <Image src={"/profile.png"} alt={"profile picture"} width={350} height={459.38}></Image>
    </div>
  </section>

  </>
  )
}

export default AboutSection