import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { arrayof } from 'prop-types';

import api from '../../../../../store/api';

import { Interviews } from './types';

const url = '/api/rag/interviews';
const options = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
};
export const fetchInterviewData = createAsyncThunk(
  'interview/fetchInterviewInfoRequested',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(url, options);
      return response;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const interviewSlice = createSlice({
  name: 'interview',
  initialState: {
    data: Interviews,
    success: false,
    error: false,
    isloading: false,
    message: '',
  },
  reducers: {
    fetchInterviewInfoRequested(state, action) {
      state.data = action.payload;
    },
    fetchInterviewInfoSucceed(state) {
      state.success = true;
    },
    fetchInterviewInfoFailed(state) {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInterviewData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.success = true;
        state.message = 'the data was successfully retrieve';
      })
      .addCase(fetchInterviewData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchInterviewData.rejected, (state) => {
        state.error = true;
        state.message = 'Rejected';
      });
  },
});
export const {
  fetchInterviewInfoRequested,
  fetchInterviewInfoSucceed,
  fetchInterviewInfoFailed,
} = interviewSlice.actions;
export default interviewSlice.reducer;
