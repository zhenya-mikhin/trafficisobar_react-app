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
            <h3 className={styles.description__title}>Евгений Михин</h3>
            <p className={styles.description__text}>
              Здравствуйте! Меня зовут Евгений. В IT сфере около года, специализируюсь на React JS, TypeScript, Redux. Окончил курсы в HTML Academy по вёрстке и js. Владею навыками адаптивной кроссбраузерной верстки, применения препроцессоров less sass scss, фреймворка React, а так де Redux, React-Redux, Reselect, React Router, REST API, Axios, Redux-form, Redux-saga. Умею грамотно писать Ajax запросы к API, понимаю принцип построения SPA, понимаю принцип работы по TDD, Jest, понимаю FLUX круговорот (UserInterface - BusinessLogicLayer - DataAccessLayer), Применял паттерны программирования, такие как MVC, MVP, MVVM. Умею работать с Git.
              Умею построить весь проект с нуля, используя Redux state и хуки в функциональных компонентах, использую современный подход без классовых компонентов на проекте, но хорошо знаю и умею применять их, CSS через component.module.css. Умею работать Redux State, Route, умею писать HOC, так же ознакомлен с принципами ООП, понимаю жизненный цикл компоненты, разделения на контейнерную и презентационную компоненту. Dispatch, ActionCreator, ThunkCreator.
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
