import React from 'react'
import './Shop.css'
import { Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'
import IOSstore from '../../Assets/Shop/appStore.png'
import Astore from '../../Assets/Shop/googlePlay.png'
import Shop1 from '../../Assets/Shop/animatedK.png'
import Shop2 from '../../Assets/Shop/coak.png'
const Shop = () => {
  return (
    <>
    <h2 className='heading5'>Shop <span>Page</span></h2>
    <section className='shopp'>
                <Row className='align-items-center'>
                    <Col lg={6} className=' topic text-center text-white text-xx-lg-start mb-5 mb-lg-0'>
                        <h4 className='con'>Download mobile App and </h4>
                        <h2>save up to 20%</h2>
                        <p>The kebab was, at the time, just meat sprinkled with salt, which was then barbecued and gobbled up by this army on the
                            move. But soon it caught the fancy of Indian chefs. And by their very capable hands,
                            the kebab was perfected into a sublime art. They choose the finest meats, created an...</p>
                        <Link to='/'>
                            <img src={IOSstore} alt="IOS" className='img-fluid me-3' />
                        </Link>
                        <Link to='/'>
                            <img src={Astore} alt="Android" className='img-fluid me-3'/>
                        </Link>
                    </Col>
                    <Col lg={6}>
                        <img src={Shop1} alt="e-Shop" className='img-fluid me-3'/>
                        <img src={Shop2} alt="e-Shop" className='img-fluid me-3'/>
                    </Col>
                </Row>
            </section>
            </>
  )
}

export default Shop