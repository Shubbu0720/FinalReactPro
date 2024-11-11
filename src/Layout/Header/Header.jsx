import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../../src/Assets/logo1-removebg-preview.png'
import './header.css'
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartQuantity } from "../../Redux/Slice/AuthSlice";

const Header = () => {
  const [nav, setNav] = useState(false);
  // const { user1 } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch=useDispatch();
  const userName = window.localStorage.getItem("userName")
  const cartQuantity = useSelector(selectCartQuantity);
  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  const handlelogout = () => {
    window.localStorage.clear();
    dispatch(clearCart());
    navigate("/signin")

  }

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >

        {/* <div className="h"> */}
        <Container className="container">
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navb">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/reviews">
                Reviews
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
            </Nav>

            {/* <div className='ic'> */}
            {
              userName ?
                (
                  <Nav.Link onClick={handlelogout
                  }>
                    <div className='sign bi bi-box-arrow-left'>
                      Sign Out
                    </div>

                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/signin">


                    <div className='sign bi bi-box-arrow-in-right'>
                      Sign In
                    </div>

                  </Nav.Link>
                )
            }


            <Nav.Link as={Link} to="/cart">
              <div className="cart">
                <i className="bi bi-bag fs-5"></i>
                {cartQuantity > 0 && (
                  <em className="roundpoint">{cartQuantity}</em>
                )}
              </div>
            </Nav.Link>

            {
              userName ? <>
                <span className="signout">Welcome {userName}</span>
              </> : null
            }
            {/* </div> */}

          </Navbar.Collapse>
        </Container>
        {/* </div> */}

      </Navbar>
    </header>
  );
};

export default Header;