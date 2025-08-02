import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Register = ({ setToggle, Toggle, setUserData }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setUserData(prev => [...prev, formData]);
    setFormData({ username: '', email: '', mobile: '', password: '' }); 
    toast.success("user registared")
    setToggle(false); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-50'>
        <input
          className='border-2 rounded px-3 py-1'
          type="text"
          name="username"
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <span className="text-red-500">{errors.username}</span>}

        <input
          className='border-2 rounded px-3 py-1'
          type="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}

        <input
          className='border-2 rounded px-3 py-1'
          type="number"
          name="mobile"
          placeholder='Mobile'
          value={formData.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <span className="text-red-500">{errors.mobile}</span>}

        <input
          className='border-2 rounded px-3 py-1'
          type="password"
          name="password"
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="text-red-500">{errors.password}</span>}

        <button className='border-2 bg-blue-600 rounded px-3 py-1 text-white' type="submit">
          Register
        </button>
      </form>

      <p className='mt-2'>
        Already have an account?{' '}
        <span onClick={() => setToggle(!Toggle)} className='text-blue-500 cursor-pointer'>
          Login now
        </span>
      </p>
    </div>
  );
};

export default Register;
