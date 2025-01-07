import React from 'react'
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AllBooks from './pages/AllBooks'
import SignUp from './pages/SignUp'
import LogIn from './pages/Login'
// import LogIn from './pages/Login'
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'


const App = () => {
  return (
    <div>
    
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/all-books" element={<AllBooks/>}/>
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App

