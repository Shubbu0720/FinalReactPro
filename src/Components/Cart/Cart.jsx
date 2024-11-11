import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './cart.css';
import { clearCart, removeCart, addCart, selectCartItems, selectCartTotal } from '../../Redux/Slice/AuthSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  const CART_STORAGE_KEY = 'cartItems';

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCartItems = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCartItems) {
      JSON.parse(savedCartItems).forEach((item) => {
        dispatch(addCart(item));
      });
    }
  }, [dispatch]);

  // Save cartItems to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeCart(item));
  };

  const handlePurchase = () => {
    if (cartItems.length > 0) {
      alert("Thank You for purchasing");
      dispatch(clearCart());
      localStorage.removeItem(CART_STORAGE_KEY); // Clear localStorage after purchase
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.removeItem(CART_STORAGE_KEY); // Clear localStorage manually
  };

  return (
    <div className='cart-page'>
      <h2 className="heading6">
        Your<span> Cart</span>
      </h2>
      {cartItems.length === 0 ? (
        <p className='carthead'>Your cart is empty!</p>
      ) : (
        <>
          <div className='cart-items'>
            {cartItems.map((item) => (
              <div className='cart-item' key={item.id}>
                <img src={require(`../../Assets/Dishes/${item.image}`)} alt={item.name} />
                <div className='cart-item-info'>
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className="btt" type="submit" onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className='cart-summary'>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <button type="submit" className='clear-cart-btn' onClick={handleClearCart}>
              Clear Cart
            </button>
            <button className='purchase-button' onClick={handlePurchase} type="submit">
              Purchase
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
