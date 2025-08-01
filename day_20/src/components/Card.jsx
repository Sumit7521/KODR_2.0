import React from 'react';

const Card = ({ data }) => {
  const { product, description, price, image } = data;

  return (
    <div className="border rounded shadow-md p-4 bg-white">
      <img src={image} alt={product} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-xl font-bold">{product}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-green-600 font-semibold mt-2">₹ {price}</p>
    </div>
  );
};

export default Card;
