import React from 'react'
import styles from './Title.module.scss'

const TitleComponent = ({ title }) => {
  return (
    <div className={styles.wrap}>
      <span className={styles.before}></span>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.after}></span>
    </div>
  )
}

export default TitleComponent
