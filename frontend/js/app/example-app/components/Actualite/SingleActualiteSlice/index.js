import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

import api from '../../../../../store/api';
import { Acceuils } from '../slice/types';
const url = '/api/rag/actualites';
const options = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
};
export const fetchAcceuilData = createAsyncThunk(
  'acceuil/fetchAcceuilInfoRequested',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(url, options);
      return response;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const acceuilSlice = createSlice({
  name: 'acceuil',
  initialState: {
    data: Acceuils,
    success: false,
    error: false,
    isloading: false,
    message: '',
  },
  reducers: {
    fetchAcceuilInfoRequested(state, action) {
      state.data = action.payload;
    },
    fetchAcceuilInfoSucceed(state) {
      state.success = true;
    },
    fetchAcceuilInfoFailed(state) {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAcceuilData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.success = true;
        state.message = 'the data was successfully retrieve';
      })
      .addCase(fetchAcceuilData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchAcceuilData.rejected, (state, action) => {
        state.error = true;
        state.message = 'Rejected';
      });
  },
});
export const {
  fetchAcceuilInfoRequested,
  fetchAcceuilInfoSucceed,
  fetchAcceuilInfoFailed,
} = acceuilSlice.actions;
export default acceuilSlice.reducer;
