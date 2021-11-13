import React from 'react'

import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'

import styles from './Main.module.scss'
import image from '../../assets/images/about-img.png'

const MainPage = () => {
  return (
    <>
      <Title title='Обо мне' />
      <section className='container'>
        <div className={styles.about}>
          <div className={styles.description}>
            <h3 className={styles.description__title}>Sed ut perspiciatis</h3>
            <p className={styles.description__text}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
          <img
            className={styles.img}
            src={image}
            width='400'
            height='400'
            alt='user' />
        </div>
        <Button text='Смотреть работу' />
      </section>
    </>
  )
}

export default MainPage
