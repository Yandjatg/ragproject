import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { arrayof } from 'prop-types';

import api from '../../../../../store/api';

import { Startups } from './types';

const url = '/api/rag/startups';
const options = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
};
export const fetchStartupData = createAsyncThunk(
  'startup/fetchStartupInfoRequested',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(url, options);
      return response;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const startupSlice = createSlice({
  name: 'startup',
  initialState: {
    data: Startups,
    success: false,
    error: false,
    isloading: false,
    message: '',
  },
  reducers: {
    fetchStartupInfoRequested(state, action) {
      state.data = action.payload;
    },
    fetchStartupInfoSucceed(state) {
      state.success = true;
    },
    fetchStartupInfoFailed(state) {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStartupData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.success = true;
        state.message = 'the data was successfully retrieve';
      })
      .addCase(fetchStartupData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchStartupData.rejected, (state) => {
        state.error = true;
        state.message = 'Rejected';
      });
  },
});
export const {
  fetchStartupInfoRequested,
  fetchStartupInfoSucceed,
  fetchStartupInfoFailed,
} = startupSlice.actions;
export default startupSlice.reducer;
