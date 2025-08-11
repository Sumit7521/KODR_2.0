import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users")
      .then(res => {
        console.log(res.data)
        setUsers(res.data)
      })
      .catch(err => {
        console.error("Error fetching users:", err)
      })
  }, [])

  return (
    <div className="p-6 gap-6 flex flex-col">
      {users.length > 0 ? (
        users.map(user => (
          <div 
            key={user.id} 
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-lg font-bold mb-2">
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-gray-600"><strong>Username:</strong> {user.username}</p>
            <p className="text-gray-600">
              <strong>Address:</strong> {user.address.number} {user.address.street}, {user.address.city}, {user.address.zipcode}
            </p>
            <button
              className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Loading Users...</p>
      )}
    </div>
  )
}

export default Users
