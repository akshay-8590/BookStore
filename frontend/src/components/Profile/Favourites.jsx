import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState([]);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // Fetch favorite books when the component mounts
  useEffect(() => {
    const fetchFavouriteBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/get-favourite-books",
          { headers }
        );
        setFavouriteBooks(response.data.data || []);
      } catch (error) {
        console.error("Error fetching favorite books:", error);
      }
    };

    fetchFavouriteBooks();
  }, []);

  // Remove book from the favorites list
  const handleRemove = (bookId) => {
    setFavouriteBooks((prevBooks) =>
      prevBooks.filter((book) => book._id !== bookId)
    );
  };

  return (
    <>
      {FavouriteBooks.length === 0 && (
        <div className="text-5xl font-semibold text-gray-500 flex items-center justify-center w-full bg-pink-100">
          No favourite books
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        {FavouriteBooks.map((items, i) => (
          <div key={i}>
            <BookCard
              data={items}
              favourite={true}
              onRemove={handleRemove} // Pass the remove callback to BookCard
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourites;
