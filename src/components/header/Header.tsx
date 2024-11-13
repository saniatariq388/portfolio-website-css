import React from 'react' 
import styles from './Header.module.css'
import Link from 'next/link'
import { caveatFont, interFont } from '@/fonts'

function Header() {
  return (
    <>
    <header className={styles.header}>
        <nav className={styles.nav}>
           <h1 className={caveatFont.className}><span>S</span>ania <span>T</span>ariq</h1>
           <ul className={interFont.className}>
            <li><Link href={"#!"}>Home</Link></li>
            <li><Link href={"#!"}>About</Link></li>
            <li><Link href={"#!"}>Portfolio</Link></li>
            <li><Link href={"#!"}>Services</Link></li>
            <li><Link href={"#!"}>Testimonials</Link></li>
            <li><Link href={"#!"}>Contact</Link></li>
           
           </ul>
        </nav>
    </header>
    </>
  )
}

export default Header