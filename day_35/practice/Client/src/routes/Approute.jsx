import React from 'react'
import { Route, Routes } from 'react-router'
import Form from '../pages/Form'
import Gallery from '../pages/Gallary'

const Approute = () => {
  return (
    <Routes>
      <Route path='/' element={<Form/>}  />
      <Route path='/gallery' element={<Gallery/>}  />
    </Routes>
  )
}

export default Approute