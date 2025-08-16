import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../Layout/AuthLayout'
import Login from '../Screen/authScreen/Login' 
import Register from '../Screen/authScreen/Register'
import Home from '../Screen/mainscreen/Home'
import AdminLayout from '../Layout/AdminLayout'
import AdminHome from '../Screen/adminscreen/AdminHome'

const AppRouter = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        },
        {
            // path : 
        }
      ]
    },
    {
        path: '/main',
        element: <Home />
    },
    {
        path :'/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminHome />
            }
        ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRouter
