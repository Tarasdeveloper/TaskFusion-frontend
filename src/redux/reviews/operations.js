import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
import { $instance } from '../auth/operations';

axios.defaults.baseURL = 'https://taskfusion-service.onrender.com/';

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async (review, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const { data } = await axios.post('/reviews/own', review, { headers });
      Notiflix.Notify.success('Your review successfully added.Thank you!');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await $instance.get(
        `/reviews?page=${page}&limit=4${limit}`,
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReviews',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instance.delete(`/reviews/own`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const editReview = createAsyncThunk(
  'reviews/editReviews',
  async ({ _, review }, thunkAPI) => {
    try {
      // console.log(review);
      const { data } = await $instance.patch(`/reviews/own`, review);
      Notiflix.Notify.success('Your review successfully edited.Thank you!');

      return data;
    } catch (error) {
      Notiflix.Notify.failure(`${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getReviewById = createAsyncThunk(
  'reviews/getReviewById',
  async (_, thunkAPI) => {
    try {
      const { data } = await $instance.get('/reviews/own');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
