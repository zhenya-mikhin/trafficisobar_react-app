import React, { useEffect, useState } from 'react'

import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'

import styles from './Example.module.scss'
import api from '../../axios/index'

const ExamplePage = () => {
  const [image, setImage] = useState({ url: '' })

  const getCat = async () => {
    let response = await api.get()
    setImage(response.data[0])
  }

  useEffect(() => {
    getCat()
  }, [])

  return (
    <>
      <Title title='Пример' />
      <section className='container'>
        <div className={styles.example}>
          <h3 className={styles.example__title}>Картинка с котом</h3>
          <div
            className={styles.example__img}
            style={{ background: `url(${image.url}) no-repeat` }}></div>
        </div>
        <Button text='Загрузить другую' func={getCat} />
      </section>
    </>
  )
}

export default ExamplePage
