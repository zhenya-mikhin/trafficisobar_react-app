import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import styles from './Header.module.scss'

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <GlobalSvgSelector id='header-logo' />
          <nav>
            <a className={styles.header__link}>Главная</a>
            <a className={styles.header__link}>Пример</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
