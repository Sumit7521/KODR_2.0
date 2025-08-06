import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* 🌟 Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-6">We offer web design, SEO, and consulting services to help your business grow.</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* 📘 About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          We are a passionate team of developers and marketers dedicated to delivering the best digital experiences.
          Whether you're building a brand-new site or optimizing for search engines, we're here to help.
        </p>
      </section>

      {/* 🛠️ Services Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-white p-6 shadow rounded hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-gray-600 mb-4">
              Modern, responsive websites tailored to your brand and users.
            </p>
            <Link to="/service/web-design" className="text-blue-600 font-medium hover:underline">
              Learn More →
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 shadow rounded hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
            <p className="text-gray-600 mb-4">
              Improve your Google rankings and drive more traffic organically.
            </p>
            <Link to="/service/seo" className="text-blue-600 font-medium hover:underline">
              Learn More →
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 shadow rounded hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Consulting</h3>
            <p className="text-gray-600 mb-4">
              Strategic insights and advice to move your business forward.
            </p>
            <Link to="/service/consulting" className="text-blue-600 font-medium hover:underline">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* 📞 Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-10">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
