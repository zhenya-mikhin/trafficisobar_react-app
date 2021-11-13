import React from 'react'
import styles from './Footer.module.scss'

const FooterComponent = () => {
  const date = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.copyright}>
          Copyright © <span>{date}</span>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
