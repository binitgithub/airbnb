import React from 'react';

const SearchBar = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-full shadow-lg flex items-center justify-between">
        <div className="px-6 py-4 flex-1">
          <input 
            type="text" 
            placeholder="Search destinations" 
            className="w-full text-gray-700 placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div className="border-l py-4 px-6">
          <input 
            type="text" 
            placeholder="Add dates" 
            className="text-gray-700 placeholder-gray-500 focus:outline-none"
          />
        </div>

        <div className="border-l py-4 px-6">
          <input 
            type="text" 
            placeholder="Add guests" 
            className="text-gray-700 placeholder-gray-500 focus:outline-none"
          />
        </div>

        <button className="bg-pink-500 text-white rounded-full p-2 m-2">
          <span className="material-icons">search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
