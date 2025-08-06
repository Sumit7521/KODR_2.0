import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-16 flex flex-col items-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg mb-8">
          We're a small but passionate team dedicated to helping businesses grow through powerful digital solutions. 
          From modern web design to effective SEO strategies and expert consulting, we bring your vision to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to empower clients with clean, user-friendly websites and smart marketing strategies. 
              We aim to be more than just developers — we're partners in your growth.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
            <p className="text-gray-700">
              We combine creative design, technical expertise, and business insight to deliver real results. 
              We care about your goals, and we treat every project like it's our own.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
