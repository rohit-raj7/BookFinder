import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar";
import BookCard from "../BookCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${searchTerm}`
      );
      setBooks(response.data.docs.slice(0, 20));  
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-center mt-10 text-green-600">
        Book Finder
      </h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {loading ? (
        <p className="text-center mt-10 text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

 