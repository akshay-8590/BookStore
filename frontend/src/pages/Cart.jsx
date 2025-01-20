import React, { useState, useEffect } from 'react';  
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Loader from '../components/loader/Loader';
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const [Cart, setCart] = useState([]);  
  const [total, setTotal] = useState(0); 
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const navigate = useNavigate(); // Declare navigate from useNavigate

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/get-user-cart", { headers });
        setCart(res.data.data);
      } catch (error) {
        console.error("Error fetching the cart data:", error);
      }
    };
    fetch();
  }, []);

  const deleteItem = async (bookid) => {
    try {
      const res = await axios.put(`http://localhost:3000/api/v1/remove-from-cart/${bookid}`, {}, { headers });
      alert(res.data.message);
      setCart(prevCart => prevCart.filter(item => item._id !== bookid));
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  useEffect(() => {
    if (Cart.length > 0) {
      let totalAmount = 0;
      Cart.forEach((item) => {
        totalAmount += item.price;
      });
      setTotal(totalAmount);
    }
  }, [Cart]);

  // Mark the function as async and use await for the axios request
  const PlaceOrder = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/place-order',
        { order: Cart },
        { headers }
      );
      alert("Order placed successfully!");
      navigate("/profile/orderHistory");  // Navigate after successful order placement
    } catch (error) {
      console.log("Error placing order:", error);
      alert("Error placing order. Please try again.");
    }
  };

  return (
    <div className='bg-zinc-900 px-12 h-screen py-8'>
      {!Cart.length ? (
        <div className='flex items-center justify-center h-[100%]'>
        <Loader />
        </div>
      ) : Cart.length === 0 ? (
        <div className='h-screen'>
          <div className='h-[100%] flex items-center justify-center flex-col'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>
              Empty Cart
            </h1>
            <img
              src='/empty.png'
              alt='empty cart'
              className='lg:h-[50vh]'
            />
          </div>
        </div>
      ) : (
        <>
          <h1 className='text-5xl font-semibold text-zinc-500 mb-8'>
            Your cart
          </h1>
          {Cart.map((items, i) => (
            <div
              key={i}
              className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center'
            >
              <img
                src={items.url}
                alt='/'
                className='h-[20vh] md:h-[10vh] object-cover'
              />
              <div className='w-full md:w-auto'>
                <h1 className='text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0'>
                  {items.title}
                </h1>
                <p className='text-normal text-zinc-300 mt-2 hidden lg:block'>
                  {items.desc.slice(0, 100)}...
                </p>
              </div>
              <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
                <h2 className='text-zinc-100 text-3xl font-semibold flex'>
                  ₹ {items.price}
                </h2>
                <button
                  className='bg-red-100 text-red-700 border-red-700 rounded p-2 ms-12'
                  onClick={() => deleteItem(items._id)}
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}

          {Cart.length > 0 && (
            <div className='mt-4 w-full flex items-center justify-end'>
              <div className='p-4 bg-zinc-800 rounded'>
                <h1 className='text-3xl text-zinc-200 font-semibold'>
                  Total Amount
                </h1>
                <div className='mt-3 flex items-center justify-between text-xl text-zinc-200'>
                  <h2>{Cart.length} Books</h2>
                  <h2>₹ {total || 0}</h2>
                </div>
                <div className='w-[100%] mt-3'>
                  <button 
                    className='bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-200'
                    onClick={PlaceOrder}
                    title="Place your order"
                  >
                    Place your order
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
