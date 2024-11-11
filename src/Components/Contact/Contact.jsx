import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './contact.css'
import { FaFacebook, FaGooglePlusG, FaInstagram, FaWhatsappSquare } from 'react-icons/fa'
const Contact = () => {
    return (
        <>
            <h2 className='heading4'>
                Contact <span>Us</span>
            </h2>
            <section className='contact' id='contact'>
                <Container>
                    <Row className=' row justify-center-center'>
                        <Col sm={8} className='text-center'>
                            <h4>We Guarantee</h4>
                            <h2>20 Minutes Delivery!</h2>
                            <p>Maximum orders liability is Rs. 300. Delivery guarantee applicable at the first barrier point.
                                We does not penalize its drivers for late delivery.
                                20 minutes or free not applicable when store operating conditions or not suitable ,
                                to be announced at the time of order taking.
                            </p>
                            <Link to='/' className='btn btn-danger px-4 py-2 rounded-0'>
                                Call: 222-666-8888
                            </Link>
                            <div className='icons'>
                                <Link to='/' className='ii'><FaInstagram />www.kebablicios.com</Link>
                            </div>
                            <div className='icons'>
                                <Link to='/' className='ii'><FaFacebook />www.kebablicios.com</Link>
                            </div>
                            <div className='icons'>
                                <Link to='/' className='ii'><FaGooglePlusG />www.kebablicios.com</Link>
                            </div>
                            <div className='icons'>
                                <Link to='/' className='ii'><FaWhatsappSquare />www.kebablicios.com</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact