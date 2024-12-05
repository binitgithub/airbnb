import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex items-center">
        <img src="logo.png" alt="Airbnb Logo" className="h-8 mr-3" />
        <h1 className="text-xl font-bold text-pink-500">airbnb</h1>
      </div>
      
      {/* Links */}
      <div className="flex space-x-8">
        <a href="#" className="text-gray-700 hover:text-gray-900">Stays</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Experiences</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Airbnb your home</a>
      </div>
      
      {/* Profile */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-700">🌐</button>
        <button className="flex items-center text-gray-700 border px-3 py-2 rounded-full hover:shadow-lg">
          <span className="material-icons">menu</span>
          <span className="ml-2 material-icons">person</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
