import React from 'react'
import { Carousel } from 'react-bootstrap'
import img from '../../Assets/Banner/bihariK.jpg'
import imgg from '../../Assets/Banner/kebab-banner.jpg'
import imggg from '../../Assets/Banner/img6.jpg'
import './home.css'
import About from '../About/About'
import Menu from '../Menu/Menu'
import Shop from '../Shop/Shop'
import Review from '../Review/Review'
import Contact from '../Contact/Contact'
import Blogs from '../Blogs/Blogs'
// import Footer from '../../Layout/Footer/Footer'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className='home' id='home'>
          <Carousel>
            <Carousel.Item>
              <img
                className="banner d-block"
                src={img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Bihari Boti Kebab</h3>
                <p>These marinated mutton pieces are further cooked with a melange of spices and then grilled to perfection in skewers.</p>
                <button className='ban-btn' type="submit">Get yours now..</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="banner d-block"
                src={imgg}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Smokey Chicken Kebab</h3>
                <p>Aim for a variety of color and for veggies that will hold their shape well.And for smokey flavour we used coal.</p>
                <button className='ban-btn' type="submit">Get yours now..</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="banner d-block"
                src={imggg}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Lemonade Chicken Kebab</h3>
                <p>The most delicious flavorful chicken kabob marinade made with lemon juice</p>
                <button className='ban-btn' type="submit">Get yours now..</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </section>
      <About/>
      <Menu/>
      <Shop/>
      <Review/>
      <Contact/>
      <Blogs/>
      {/* <Footer/> */}
    </>
  )
}

export default Home