import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='h-screen md:h-[78vh] flex flex-col md:flex-row items-center justify-center'>
      <div className='w-full  md:mb-0 lg:w-3/6 flex flex-col lg:items-start justify-center'>
      <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left'>
        Discover Your Next Great Read
        </h1>
      <p className='text-xl mt-4 text-zinc-300 text-center lg:text-left'>
        Explore a world of books, from timeless classics to the latest bestsellers, all in one cozy corner online.
        </p>
        <div className='mt-8 mb-4'>
        <Link
         to= "/all-books"
         className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>Discover Books</Link>
        </div>
      </div>
      <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
      <img src="./Hero.png" alt="Hero" />
      </div>
    </div>
  ) 
}

export default Hero