import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Service from '../Pages/Service/Service'
import Webdesign from '../Pages/Service/Webdesign'
import SEO from '../Pages/Service/SEO'
import Consulting from '../Pages/Service/Consulting'

const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/web-design" element={<Webdesign />} />
            <Route path="/service/seo" element={<SEO />} />
            <Route path="/service/consulting" element={<Consulting />} />
        </Routes>
    </div>
  )
}

export default AppRouter