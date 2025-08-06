import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  const fetchProducts = async (query) => {
    try {
      const response = await axios('https://fakestoreapi.com/products')
      const filtered = response.data.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
      setProducts(filtered)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [search])
  
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearch(value)
    fetchProducts(value) 
  }

  return (
    <div>
      <h1>Products</h1>

      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <ul>
        {}
          {products.map(product => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

//dynamic imports - 
//suspense fallback - dynamic loading