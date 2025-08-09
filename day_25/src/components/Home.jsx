import axios from 'axios'
import React from 'react'

const Home = () => {

const fatchdata = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
        console.log(response.data)
        }
    catch (error) {
        console.log(error)
    }
}
fatchdata();

  return (
    <div>Home</div>
  )
}

export default Home