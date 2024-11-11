import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { base_url, end_point } from "../../api/Api_url";
import axios from 'axios';

const signUp_url = base_url + end_point.signup;
const menu_url = base_url + end_point.menu;
const dishes_url = base_url + end_point.dishes;

export const registration = createAsyncThunk("user/registration",
  async (userData) => {
    let res = await axios.post(signUp_url, userData);
    console.log("Axios response after regitsration", res);
    return res?.data;
  });

export const login = createAsyncThunk("user/login",
  async () => {
    let response = await axios.get('http://localhost:1000/signup');
    return response.data;
  });

export const fetchMenuItems = createAsyncThunk('user/fetchMenuItems',
  async () => {
    const response = await fetch(menu_url);
    const data = await response.json();
    return data;
  });

export const fetchDishes = createAsyncThunk('user/fetchDishes',
  async () => {
    const response = await fetch(dishes_url);
    const data = await response.json();
    return data;
  });

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await axios.get('http://localhost:1000/blogs');
  return response.data;
});

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
  const response = await axios.get(`${base_url}${end_point.reviews}`);
  return response.data;
});

export const addReview = createAsyncThunk('reviews/addReview', async (review) => {
  const response = await axios.post(`${base_url}${end_point.reviews}`, review);
  return response.data;
});

export const deleteReview = createAsyncThunk('reviews/deleteReview', async (id) => {
  await axios.delete(`${base_url}${end_point.reviews}/${id}`);
  return id;
});

let authSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    status: 'idle',
    users: null,
    error: null,
    data: [],
    items: [],
    dishes: [],
    blogs: [],
    cart: [],
    totalQuantity: 0,
    totalPrice: 0,
    cartItems: [],
    reviews: []
  },
  reducers: {
    addCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(tempProduct);
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }

      state.totalQuantity -= 1;
      state.totalPrice -= action.payload.price;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },

  extraReducers: (builder) => {
    //Registration
    builder
      .addCase(registration.pending, (state, action) => {
        console.log("Pending", action);
        state.statusForReg = "on Pending";
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, action) => {
        console.log("Fulfilled", action);
        state.isLoading = false;
        state.status = action.payload?.data?.status;
        state.data = action.payload?.data;
      })
      .addCase(registration.rejected, (state, action) => {
        console.log("Rejected", action);
        state.status = "Rejected";
        state.isLoading = false;
      })
      //Login

      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("Fulfilled Action For Login", action);
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.users = null;
        state.error = action.error.message;
      })

      //menu
      .addCase(fetchMenuItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      //dishes
      .addCase(fetchDishes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dishes = action.payload;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      //reviews

      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter(review => review.id !== action.payload);
      })

      //blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

  }
});
export const selectMenuItems = (state) => state.menu.items;
export const selectMenuStatus = (state) => state.menu.status;
export const selectMenuError = (state) => state.menu.error;

export const selectDishesItems = (state) => state.dishes.dishes;
export const selectDishesStatus = (state) => state.dishes.status;
export const selectDishesError = (state) => state.dishes.error;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotal = (state) => state.cart.totalPrice;
export const selectCartQuantity = (state) => state.cart.totalQuantity;

export const selectAllBlogs = (state) => state.blogs.blogs;
export const selectBlogsStatus = (state) => state.blogs.status;
export const selectBlogsError = (state) => state.blogs.error;

export default authSlice.reducer;
export const { addCart, removeCart, clearCart } = authSlice.actions;
