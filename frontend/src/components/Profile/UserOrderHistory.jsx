import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Loader from '../loader/Loader';

const UserOrderHistory = () => {
  const [OrderHistory, setOrderHistory] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() =>{
    const fetch = async () => {
      const response = await axios.get(
        "`http://localhost:3000/api/v1/get-order-history",
        {headers}
      );
      setOrderHistory(response.data.data);
    };
    fetch();
  },[])
  return (
   <>
   {!OrderHistory && <div className='flex items-center justify-center h-[100%]'><Loader/></div>}
    {OrderHistory && OrderHistory.length === 0&&(
      <div className='h-[80vh] p-4 text-zinc-100'>
        <div className='h-[100%] flex flex-col items-center justify-center'>
          <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>
            No order History
          </h1>
          <img
           src="https://cdn-icons-png.flaticon.com/128/9961/9961218.png" 
           alt=""
           className='h-[20vh] mb-8' 
           />
        </div>
      </div>
    )}
    {OrderHistory && OrderHistory.length > 0 &&(
      <div className='h-[100%] p-0 md:p-4 text-zinc-100'>
        <h1 className='text-3xl md:text-5xl font font-semibold text-zinc-500 mb-8'>
          Your Order History
        </h1>
      </div>
    )}
    
   </>
  )
}

export default UserOrderHistory