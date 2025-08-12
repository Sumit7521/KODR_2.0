import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MydataContext } from '../Context/Contex'

const Users = () => {

const { users,setUsers, getuser , filter , setfilter} = useContext(MydataContext)

  useEffect(() => {
    if(users.length<=0){
      getuser()
    }
    
  }, [])

  const deletehandler =(u)=>{
    console.log(u)
    setUsers(()=>users.filter((val)=> val.id !== u))
    setfilter(filter.filter((val)=> val.id !== u))
  }

  return (
    <div>
      <label>Filter users :</label>
      <select>
        <option value="">select</option>
        <option value="">starts with 'D'</option>
        <option value="">starts with 'J'</option>
        <option value="">starts with 'K'</option>
        <option value="">starts with 'M'</option>
      </select>
      <div className="p-6 gap-6 flex flex-col">
      {users?.length > 0 ? (
        users?.map(user => (
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
              onClick={()=>deletehandler(user.id)}
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
    </div>
    
  )
}

export default Users
