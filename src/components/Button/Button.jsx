import React from 'react'
import styles from './Button.module.scss'

const ButtonComponent = ({ text, func }) => {
  return <button className={styles.button} onClick={func}>{text}</button>
}

export default ButtonComponent
