import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import footimg from '../../Assets/logo1-removebg-preview.png'
import { Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        // <section className="footer-main">
            <footer className="footer-area">
                <div className="main">
                    <div className="footer">
                        <div className="single-footer">
                            <img src={footimg} alt="logo" />
                        </div>
                        <div className="single-footer">
                            <h4 className='gap1'>About Our Website</h4>
                            <p className="p1">Dozens of types of kebabs are known, some eaten regionally and some widely known internationally. Perhaps the best-known of the latter is shish kebab, although this term is unrevealing inasmuch as it means simply “skewered meat”.</p>
                            <div className="footer-social">
                               <Link><i class="bi bi-facebook"></i></Link>
                               <Link><i class="bi bi-instagram"></i></Link>
                               <Link><i class="bi bi-linkedin"></i></Link>
                            </div>
                        </div>

                        <div className="single-footer">
                            <h4 className="gap2">Main Menu</h4>
                            <ul>
                                <li><Nav.Link as={Link} to="/">Home</Nav.Link></li>
                                <li><Nav.Link as={Link} to="/about">About Us</Nav.Link></li>
                                <li><Nav.Link as={Link} to="/menu">Our Menu</Nav.Link></li>
                                <li><Nav.Link as={Link} to="/shop">Shop</Nav.Link></li>
                                <li><Nav.Link as={Link} to="/reviews">Reviews</Nav.Link></li>
                                <li><Nav.Link as={Link} to="/contact">Contact Us</Nav.Link></li>
                                <li><Nav.Link as={Link} to="/blog">Blogs</Nav.Link></li>
                            </ul>
                        </div>

                        <div className="single-footer">
                            <h4 className="gap2">Our Policies</h4>
                            <ul>
                                <li><Link href="">Privacy Policy</Link></li>
                                <li><Link href="">Terms & Conditions</Link></li>
                                <li><Link href="">Disclaimer</Link></li>
                            </ul>
                        </div>

                        <div className="single-footer">
                            <h4 className="gap2">Contact Us</h4>
                            <ul>
                                <li><Link href="">Gandhi maidan,Patna,Bihar</Link><i className="pho" class="bi bi-geo-alt-fill"></i></li>
                                <li><Link href="">+222 666 8888</Link><i className="pho" class="bi bi-telephone-fill"></i></li>
                                <li><Link href="">kebablicious07@gmail.com</Link><i className="pho" class="bi bi-envelope-at-fill"></i></li>
                                <li><Link href="">www.kebablicious.com</Link><i className="pho" class="bi bi-globe-europe-africa"></i></li>
                            </ul>
                        </div>
                    </div>

                    <div className="copy">
                        <p>&copy; 2024 all rights reserved<h4 className='gap'>@Created by: <span>SHABISHTAN-TASHNEEM</span></h4></p>
                    </div>
                </div>
            </footer>
        // </section>
    )
}

export default Footer
