import React from 'react'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router'
import Navbar from '../components/Navbar'
import Home from '../Pages/Home'
import Users from '../Pages/Users'
import AddUser from '../Pages/Add_User'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
          <div className='flex'>
            <Navbar/>
            <Outlet />
          </div>,
      children:[{
        path: '/',
        element:<Home />
      },
    {
      path:'/user',
      element:<Users/>
    },
  {
      path:'/adduser',
      element:<AddUser/>
    }]
        
    }
  ]
)

export default function Routing(){
  return <RouterProvider router={router} />
}