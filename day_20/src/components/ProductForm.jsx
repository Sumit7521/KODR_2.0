import React, { useState } from 'react';
import Card from './Card';

const Product = () => {
  const [productForm, setProductForm] = useState({
    product: '',
    description: '',
    price: '',
    image: ''
  });

  const [productList, setProductList] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setProductList(prev => [...prev, productForm]);
    setProductForm({ product: '', description: '', price: '', image: '' });
  };

  return (
    <div className="p-6 w-screen ">
      <form onSubmit={submitHandler} className="space-y-4 flex flex-col">
        <input
          onChange={changeHandler}
          type="text"
          name="product"
          value={productForm.product}
          placeholder="Product Name"
          className="w-[40%] p-2 border rounded"
        />
        <input
          onChange={changeHandler}
          type="text"
          name="description"
          value={productForm.description}
          placeholder="Description"
          className="w-[40%] p-2 border rounded"
        />
        <input
          onChange={changeHandler}
          type="number"
          name="price"
          value={productForm.price}
          placeholder="Price"
          className="w-[40%] p-2 border rounded"
        />
        <input
          onChange={changeHandler}
          type="text"
          name="image"
          value={productForm.image}
          placeholder="Image URL"
          className="w-[40%] p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-[30%] hover:bg-blue-700"
        >
          Add Product
        </button>
      </form>

      <div className="flex gap-4 mt-2 ">
        {productList.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
