import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { arrayof } from 'prop-types';

import api from '../../../../../store/api';

import { Actualites } from './types';

const url = '/api/rag/actualites';
const options = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
};
export const fetchActualiteData = createAsyncThunk(
  'actualite/fetchActualiteInfoRequested',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(url, options);
      return response;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const actualitelice = createSlice({
  name: 'actualite',
  initialState: {
    data: Actualites,
    success: false,
    error: false,
    isloading: false,
    message: '',
  },
  reducers: {
    fetchActualiteInfoRequested(state, action) {
      state.data = action.payload;
    },
    fetchActualiteInfoSucceed(state) {
      state.success = true;
    },
    fetchActualiteInfoFailed(state) {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActualiteData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.success = true;
        state.message = 'the data was successfully retrieve';
      })
      .addCase(fetchActualiteData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchActualiteData.rejected, (state) => {
        state.error = true;
        state.message = 'Rejected';
      });
  },
});
export const {
  fetchActualiteInfoRequested,
  fetchActualiteInfoSucceed,
  fetchActualiteInfoFailed,
} = actualitelice.actions;
export default actualitelice.reducer;
