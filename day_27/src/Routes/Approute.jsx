import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Add_User from '../Pages/Add_User'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addusers" element={<Add_User />} />
      </Routes>
    </Router>
  )
}

export default App
