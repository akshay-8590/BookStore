import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ data, favourite, onRemove }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleRemoveBook = async () => {
    try {
      // Make sure headers are passed in the request
      const response = await axios.put(
        "http://localhost:3000/api/v1/remove-book-from-favourite",  // Endpoint for removing from favourites
        { bookid: data._id },  // Sending the book id to remove it from favourites
        { headers }  // Include the necessary headers
      );
      alert(response.data.message); // Show success message
      
      // If onRemove function is passed, update the parent component state
      if (onRemove) {
        onRemove(data._id);  // Call onRemove to update the state in the parent component
      }
    } catch (error) {
      console.error("Error removing book:", error);
      alert("An error occurred while removing the book.");
    }
  };

  return (
    <>
      <Link to={`/view-book-details/${data._id}`}>
        <div className='bg-zinc-800 rounded p-4 flex flex-col'>
          <div className='bg-zinc-900 rounded flex items-center justify-center'>
            <img className='h-[25vh]' src={data.url} alt={data.title} />
          </div>
          <h2 className='mt-4 text-xl text-zinc-200 font-semibold'>{data.title}</h2>
          <p className='mt-2 text-zinc-400 font-semibold'>by {data.author}</p>
          <p className='mt-2 text-zinc-200 font-semibold text-xl'>Price: ₹ {data.price}</p>
        </div>
      </Link>
      
      {favourite && (
        <button
          className="bg-red-500 px-4 py-2 rounded border border-red-700 text-white mt-4"
          onClick={handleRemoveBook}  // Trigger the function to remove from favorites
        >
          Remove from favourites
        </button>
      )}
    </>
  );
};

export default BookCard;
