import React, { useEffect } from 'react'
import './menu.css'
import { useNavigate } from 'react-router-dom'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMenuItems, selectMenuError, selectMenuItems, selectMenuStatus } from '../../Redux/Slice/AuthSlice'

const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const menuItems = useSelector(selectMenuItems);
    const menuStatus = useSelector(selectMenuStatus);
    const menuError = useSelector(selectMenuError);
  console.log("menuStatus",menuStatus);
  const {status} = useSelector(state=>state.user)
  console.log("status",status)
  
    useEffect(() => {
      // if (status === 'idle') {
        dispatch(fetchMenuItems());
      // }
    }, []);
    console.log(menuItems);
    
  
    if (menuStatus === 'loading') {
      return <div>Loading...</div>;
    }
    console.log(menuStatus);
    
  
    if (menuStatus === 'failed') {
      return <div>Error: {menuError}</div>;
    }
    console.log(menuError);
    const getImageSrc = (imagePath) => {
        return require(`../../Assets/menu/${imagePath}`);
    };
    const userName = window.localStorage.getItem("userName")
    const handleNav=()=>{
      userName ? navigate('/dishes') : navigate('/signin');
    }
    return (
        <>
            <section className='menu' id='menu'>
      <h3 className='heading1'>Our <span>Menu</span></h3>
      <div className='box-container'>
        {menuItems?.map((item) => (
          <div className='box' key={item.id}>
            <img className='i1' src={getImageSrc(item.image)} alt={item.name} />
            <h3>{item.title}</h3>
            {[...Array(Math?.floor(item.rating))]?.map((_,index) => (
              <FaStar key={index} className='star' />
            ))}
            {item.rating % 1 !== 0 && <FaStarHalf className='star' />}
            <h4>${item.price?.toFixed(2)} <span>${item.discountPrice?.toFixed(2)}</span></h4>
          </div>
        ))}
      </div>
      <button onClick={handleNav} className='view' type="button">All Dishes</button>
    </section>
        </>
    )
}

export default Menu