import React from 'react'
import styles from './Button.module.scss'

const ButtonComponent = ({ text }) => {
  return <button className={styles.button}>{text}</button>
}

export default ButtonComponent
