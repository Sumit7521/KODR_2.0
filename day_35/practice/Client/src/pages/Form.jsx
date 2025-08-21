import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Form = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const Submithandle = async (data) => {
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append("post", data.file[0]);
      formData.append("caption", data.caption);

      const response = await axios.post("https://kodr-2-0-1.onrender.com/post", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(response.data);
      alert("Post uploaded successfully!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Failed to upload post");
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Create Post</h2>

        <form onSubmit={handleSubmit(Submithandle)} className="space-y-4">

          {/* File input */}
          <div>
            <label className="block text-gray-200 mb-1 font-medium">Add Image</label>
            <input
              type="file"
              {...register("file", { required: "Please upload an image" })}
              accept="image/*"
              className="w-full text-gray-300 p-2 rounded-md border border-gray-600 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.file && <p className="text-red-400 text-sm mt-1">{errors.file.message}</p>}
          </div>

          {/* Caption input */}
          <div>
            <label className="block text-gray-200 mb-1 font-medium">Caption</label>
            <input
              type="text"
              placeholder="Enter caption"
              {...register("caption", { required: "Caption is required" })}
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.caption && <p className="text-red-400 text-sm mt-1">{errors.caption.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded-md"
          >
            {loading ? "uploading..." : "submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
