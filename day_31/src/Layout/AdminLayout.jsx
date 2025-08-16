import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div>
        <div>navbar her</div>
        <div>
          <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout