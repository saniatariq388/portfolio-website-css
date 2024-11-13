import React from 'react'
import styles from './Button.module.css'


// de-structure of props
function Button(props:{text:string}) {
    const {text} = props  
  return (
    <>
    <button className={styles.button}>{text}</button>
    </>
  )
}

export default Button