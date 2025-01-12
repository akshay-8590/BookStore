import React from 'react'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AllBooks from './pages/AllBooks'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails'

// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'


const App = () => {
  return (
    <div>
    
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/all-books" element={<AllBooks/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/LogIn" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path='view-book-details/:id' element={<ViewBookDetails/>} />
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App

