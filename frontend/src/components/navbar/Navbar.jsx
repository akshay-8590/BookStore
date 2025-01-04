import React from 'react'

const Navbar = () => {
  const links =[
    {
      title:"Home",
      link:"/",
    },
    {
      title:"About us",
      link:"/about-us",
    },
    {
      title:"All Books",
      link:"/all-books",
    },{
      title:"Cart",
      link:"/cart",
    },
    {
      title:"Profile",
      link:"/profile",
    },
  ];
  return (
    <div className='bg-zinc-800 text-white px-8 py-4 flex justify-between items-center'>
    <div className='flex items-center'>
        <img className='h-10 me-4'
         src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="logo" />
    <h1 className='text-2xl font-semibold'>Bookstore</h1>
    </div>
    <div className='nav-link-Books'>
      {links.map((items, i) =>(
        <div key={i} >{items.title}</div>
      ))}
    </div>
    </div>
  )
}

export default Navbar