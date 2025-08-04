import React from 'react';

const Card = ({phone , email , username}) => {

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
        <p className="text-gray-600 mt-2">
          📞 <span className="ml-1">{phone}</span>
        </p>
        <p className="text-gray-600 mt-1">
          📧 <span className="ml-1">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
