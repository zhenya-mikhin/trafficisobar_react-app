import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector'
import styles from './Header.module.scss'

const HeaderComponent = () => {
  const [activeMain, setActiveMain] = useState(styles.active)
  const [activeExample, setActiveExample] = useState(null)

  const handleChangeMainActive = evt => {
    setActiveExample(null)
    setActiveMain(styles.active)
  }

  const handleChangeExampleActive = evt => {
    setActiveMain(null)
    setActiveExample(styles.active)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__container}>
          <GlobalSvgSelector id='header-logo' />
          <nav>
            <Link
              to='/'
              className={`${styles.header__link} ${activeMain}`}
              onClick={handleChangeMainActive}
            >
              Главная
            </Link>
            <Link
              to='/example'
              className={`${styles.header__link} ${activeExample}`}
              onClick={handleChangeExampleActive}
            >
              Пример
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
