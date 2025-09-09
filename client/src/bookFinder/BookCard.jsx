import React from "react";

const BookCard = ({ book }) => {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={coverUrl} alt={book.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-1">
          Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
        </p>
        <p className="text-gray-500 text-sm">
          First Published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default BookCard;


 