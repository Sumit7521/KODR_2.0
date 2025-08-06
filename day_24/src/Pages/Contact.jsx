import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white p-8 shadow-md rounded">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-8 text-center">
          We'd love to hear from you. Fill out the form and we'll get back to you shortly.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
