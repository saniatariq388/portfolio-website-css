'use client'
import React from 'react'
import styles from './portfolioCard.module.css'
import Image from "next/image";
import {motion} from "framer-motion"
import Link from 'next/link';
import { portfolioCards } from "@/constant/portfolioCard"




function PortfolioCard() {
  return (
   <>
    {portfolioCards.map((item, index) =>{
        return(
            <motion.div className={styles.card} key={index}
            initial={{opacity:0, scale: 0}}
            whileInView={{opacity:1, scale: 1}}
            transition={{duration:1}}
            >
                <Link href={item.href}>  
                <div className={styles.cardImage}>
                    {item.type == "image" ? (
                      <Link href={item.href}>
                       < Image 
                       src={item.src}
                       alt={"profile picture"}
                       width={350}
                       height={350}
                       className={styles.img}
                       />    
                      </Link>
                    ):(
                        <video src={item.src} controls={true} loop={true} muted></video>
                    )}
                </div>
                </Link>
                 <div className={styles.cardText}>{item.title}</div>
            </motion.div>
        );
    })}
   </>
  );
}

export default PortfolioCard;