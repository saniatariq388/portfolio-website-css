import React from 'react'
import styles from "./Footer.module.css";
import { caveatFont } from '@/fonts';


function Footer() {
  return (
    <>
     <footer className={styles.footer}>
        <h1 className={caveatFont.className}>&copy; 2024 Sania Tariq. All rights reserved.</h1>
     </footer>
    </>
  )
}

export default Footer;