import React from 'react';
import { Link } from 'react-router';

const Service = () => {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Services</h2>
        <h2>
            <Link to="/service">Back</Link>
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
          <li>
            <Link to="/service/web-design" className="text-blue-600 hover:underline">
              Web Design
            </Link>
            <p className="text-sm text-gray-500 pl-4">Responsive and modern UI/UX for your business.</p>
          </li>
          <li>
            <Link to="/service/seo" className="text-blue-600 hover:underline">
              SEO Optimization
            </Link>
            <p className="text-sm text-gray-500 pl-4">Rank higher on search engines and drive organic traffic.</p>
          </li>
          <li>
            <Link to="/service/consulting" className="text-blue-600 hover:underline">
              Consulting
            </Link>
            <p className="text-sm text-gray-500 pl-4">Get expert advice tailored to your digital strategy.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service;
