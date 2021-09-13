import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { arrayof } from 'prop-types';

import api from '../../../../../store/api';

import { Portraits } from './types';

const url = '/api/rag/portraits';
const options = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
};
export const fetchPortraitData = createAsyncThunk(
  'portrait/fetchPortraitInfoRequested',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(url, options);
      return response;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const portraitSlice = createSlice({
  name: 'portrait',
  initialState: {
    data: Portraits,
    success: false,
    error: false,
    isloading: false,
    message: '',
  },
  reducers: {
    fetchPortraitInfoRequested(state, action) {
      state.data = action.payload;
    },
    fetchPortraitInfoSucceed(state) {
      state.success = true;
    },
    fetchPortraitInfoFailed(state) {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortraitData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.success = true;
        state.message = 'the data was successfully retrieve';
      })
      .addCase(fetchPortraitData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchPortraitData.rejected, (state) => {
        state.error = true;
        state.message = 'Rejected';
      });
  },
});
export const {
  fetchPortraitInfoRequested,
  fetchPortraitInfoSucceed,
  fetchPortraitInfoFailed,
} = portraitSlice.actions;
export default portraitSlice.reducer;
