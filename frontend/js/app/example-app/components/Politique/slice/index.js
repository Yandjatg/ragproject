import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { arrayof } from 'prop-types';

import api from '../../../../../store/api';

import { Politiques } from './types';

const url = '/api/rag/politiques';
const options = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
};
export const fetchPolitiqueData = createAsyncThunk(
  'politique/fetchPolitiqueInfoRequested',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(url, options);
      return response;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const politiqueSlice = createSlice({
  name: 'politique',
  initialState: {
    data: Politiques,
    success: false,
    error: false,
    isloading: false,
    message: '',
  },
  reducers: {
    fetchPolitiqueInfoRequested(state, action) {
      state.data = action.payload;
    },
    fetchPolitiqueInfoSucceed(state) {
      state.success = true;
    },
    fetchPolitiqueInfoFailed(state) {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPolitiqueData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.success = true;
        state.message = 'the data was successfully retrieve';
      })
      .addCase(fetchPolitiqueData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchPolitiqueData.rejected, (state) => {
        state.error = true;
        state.message = 'Rejected';
      });
  },
});
export const {
  fetchPolitiqueInfoRequested,
  fetchPolitiqueInfoSucceed,
  fetchPolitiqueInfoFailed,
} = politiqueSlice.actions;
export default politiqueSlice.reducer;
