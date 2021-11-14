import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './pages/Main/Main'
import ExamplePage from './pages/Example/Example'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' exact element={<MainPage />} />
        <Route path='/example' exact element={<ExamplePage />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
