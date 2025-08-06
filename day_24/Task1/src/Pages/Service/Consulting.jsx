import React from 'react';

const Consulting = () => {
  return (
    <div className="min-h-screen px-6 py-16 bg-white flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Consulting Services</h1>
        <p className="text-gray-700 text-lg mb-6">
          We provide expert consulting to help you solve complex digital problems, streamline your strategy, and
          make confident business decisions with the right tech stack and marketing insight.
        </p>
        <ul className="text-left space-y-3 text-gray-600">
          <li>✅ Digital Strategy & Roadmapping</li>
          <li>✅ Technical Architecture Review</li>
          <li>✅ Business Process Automation</li>
          <li>✅ Marketing & Brand Positioning Guidance</li>
          <li>✅ 1-on-1 or Team Advisory Sessions</li>
        </ul>
      </div>
    </div>
  );
};

export default Consulting;
