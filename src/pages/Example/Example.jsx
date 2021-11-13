import React from 'react'

import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'

import styles from './Example.module.scss'
import image from '../../assets/images/cat.png'

const ExamplePage = () => {
  //const image = ''

  return (
    <>
      <Title title='Пример' />
      <section className='container'>
        <div className={styles.example}>
          <h3 className={styles.example__title}>Картинка с котом</h3>
          <img
            className={styles.example__img}
            src={image}
            width='258'
            height='258'
            alt='cat' />
        </div>
        <Button text='Загрузить другую' />
      </section>
    </>
  )
}

export default ExamplePage
