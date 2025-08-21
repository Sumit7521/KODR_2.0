import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState(null); // For modal preview

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('https://kodr-2-0-1.onrender.com/post');
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h2 className="text-3xl text-white font-bold mb-6 text-center">Gallery</h2>

      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition transform"
          >
            <img
              src={post.url}
              alt={post.caption}
              className="w-full h-64 object-cover cursor-pointer"
              onClick={() => setPreviewUrl(post.url)} // open modal
            />
            <div className="p-4">
              <p className="text-gray-200 font-medium">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {previewUrl && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setPreviewUrl(null)} // close modal
        >
          <img
            src={previewUrl}
            alt="Preview"
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
