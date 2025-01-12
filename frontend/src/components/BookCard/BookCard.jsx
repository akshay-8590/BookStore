import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({ data }) => {  
  return (
    <>
     <Link to={ `/view-book-details/${data._id}`}>
     <div className='bg-zinc-800 rounded p-4 flex flex-col '>
      <div className='bg-zinc-900 rounded flex items-center justify-center'>
        <img className='h-[25vh]' src={data.url} alt='/'/>
         </div>
         <h2 className='mt-4 text-xl text-zinc-200 font-semibold'>{ data.title }</h2>
         <p className='mt-2 text-zinc-400 font-semibold'>by { data.author }</p>
         <p className='mt-2 text-zinc-200 font-semibold text-xl'>Price: ₹ { data.price }</p>
        </div>
     </Link>
    </>
  )
}

export default BookCard