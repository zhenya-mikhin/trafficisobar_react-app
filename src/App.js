import React from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './pages/Main/Main'
import ExamplePage from './pages/Example/Example'

const App = () => {
  return (
    <>
      <Header />
      <MainPage />
      <ExamplePage />
      <Footer />
    </>
  )
}

export default App
