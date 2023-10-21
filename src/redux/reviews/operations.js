import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { refreshUserThunk } from '../auth/operations';

axios.defaults.baseURL = 'https://taskfusion-service.onrender.com/';

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const { data } = await axios.post('/reviews/own', review, { headers });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchReviews = createAsyncThunk(
  'reviews/getReviews',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/reviews?page=${page}&limit=4${limit}`);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReviews',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/reviews/own/${id}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const editReview = createAsyncThunk(
  'reviews/editReviews',
  async ({ id, review }, thunkAPI) => {
    try {
      // console.log(review);
      const { data } = await axios.patch(`/reviews/own/${id}`, review);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchReviewById = createAsyncThunk(
  'reviews/fetchReviewById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/reviews/own/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
