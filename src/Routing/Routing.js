import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from '../Layout/Header/Header'
import SignIn from '../Components/SignIn/SignIn'
import SignUp from '../Components/Signup/SignUp'
import Home from '../Components/Home/Home'
import Dishes from '../Components/Dishes/Dishes'
import About from '../Components/About/About'
import Menu from '../Components/Menu/Menu'
import Shop from '../Components/Shop/Shop'
import Review from '../Components/Review/Review'
import Contact from '../Components/Contact/Contact'
import Blogs from '../Components/Blogs/Blogs'
import Cart from '../Components/Cart/Cart'
import Footer from '../Layout/Footer/Footer'


    

const Routing = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/Signup" element={<SignUp/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/reviews" element={<Review/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/dishes" element={<Dishes/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>   
            <Footer/>
        </Router>

    )
}

export default Routing