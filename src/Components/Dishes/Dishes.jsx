import React, { useEffect, useState } from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import './Dishes.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, fetchDishes, selectDishesError, selectDishesItems, selectDishesStatus, selectIsLoggedIn } from '../../Redux/Slice/AuthSlice'


const Dishes = () => {
    const Navigate = useNavigate();
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    // const isLoggedIn=useSelector(selectIsLoggedIn);
    const dishesItems = useSelector(selectDishesItems);
    const dishesStatus = useSelector(selectDishesStatus);
    const dishesError = useSelector(selectDishesError);
    const { status } = useSelector(state => state.user)
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        // if (status === 'idle') {
        dispatch(fetchDishes());
        // }
    }, []);
    console.log(dishesItems);


    if (dishesStatus === 'loading') {
        return <p>Loading...</p>;
    }
    console.log(dishesStatus);


    if (dishesStatus === 'failed') {
        return <p>Error: {dishesError}</p>;
    }
    console.log("Error",dishesError);

    const getImageSrc = (imagePath) => {
        return require(`../../Assets/Dishes/${imagePath}`);
    };
//  const userName = window.localStorage.getItem("userName")
    const handleAddToCart = (dishesItem) => {
        // console.log("isLoggedIn",isLoggedIn);
        
        // if(!isLoggedIn){
            // userName ? navigate('/cart') : navigate('/signin');
        //     // navigate('/signin?redirectTo=cart');
        // }else{
        //     dispatch(addCart(dishesItem));
        // }
        dispatch(addCart(dishesItem)); 
        alert("Item Added To Cart")    
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayedDishes = showAll ? dishesItems : dishesItems.slice(0, 6);
    return (
        <>

            <section className='product' id='product'>
                <h2 className='heading2'>
                    Our <span>Dishes</span>
                </h2>
                {/* <div className='search'>
                    <input type="search" name='search' id='' placeholder='search here' autoComplete='off' 
                    className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]'
                    />
                </div> */}
                <div className='box-container1'>
                    {displayedDishes?.map((dish) => (
                        <div className='box1' key={dish.id}>
                            <img src={getImageSrc(dish.image)} alt={dish.name} />
                            <p>{dish.name}</p>
                            <div>
                                {[...Array(Math?.floor(dish.rating))]?.map((_, i) => (
                                    <FaStar className='star' key={i} />
                                ))}
                                {dish.rating % 1 !== 0 && <FaStarHalf className='star' />}
                            </div>
                            <p className='price'>
                                ${dish.price} <span>${dish.oldPrice}</span>
                            </p>
                            <div>
                                <button className='btn2' type="submit" onClick={() => handleAddToCart(dish)}>
                                    Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
                
                    <button onClick={toggleShowAll} className='view-more'>
                        {showAll ? 'View Less' : 'View More'}
                    </button>
                
                <button onClick={() => Navigate("/cart")} className='view-back' type='submit'>
                    View Cart
                </button>
            </section>
        </>
    )
}

export default Dishes