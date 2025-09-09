import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books..."
        className="w-80 sm:w-96 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={handleSearch}
        className="bg-green-500 text-white px-4 rounded-r-lg hover:bg-green-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;


 