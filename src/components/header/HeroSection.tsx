import React from 'react'
import styles from './HeroSection.module.css'
import { interFont } from '@/fonts'
import Button from '../button/Button'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image"


function HeroSection() {
  return (
    <section className={`${styles.hero} ${interFont.className}`}>
        <h1>Hey! I'm <span>Sania Tariq</span>
        <br /> <span>I</span> 'm A Front End Web Developer</h1>

        <p>I can build user interface for web sites and applications with {" "}
        <span>React JS</span> and {" "}
        <span>Next.Js</span><br />
        I love the front end development.</p>

   
        <Button text={"Hire Me"}/>

        <div className={styles.socialIcons}>
        <FaFacebookF  size={30} color="black" />
        <FaXTwitter size={30} color="black"/>
        <FaInstagram size={30} color="black"/>
        <FaWhatsapp size={30} color="black"/>
        <FaTelegramPlane size={30} color="black"/>
        </div>

        <div className={styles.bottomImgDiv}>
          {/* <Image src={"/behance.png"} alt={"behance picture"} width={156} height={156}></Image>
          <Image src={"/dribble.png"} alt={"dribble picture"} width={156} height={156}></Image>
          <Image src={"/upwork.png"} alt={"upwork picture"} width={156} height={156}></Image>
          <Image src={"/freelance.png"} alt={"freelance picture"} width={156} height={156}></Image> */}
        </div>
    </section>

  )
}

export default HeroSection