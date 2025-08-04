import React, { useContext } from 'react';
import { Mystore } from '../context/MyContext';

const Card = ({ phone, email, username }) => {
  const { theme } = useContext(Mystore);

  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {username}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          📞 <span className="ml-1">{phone}</span>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          📧 <span className="ml-1">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
