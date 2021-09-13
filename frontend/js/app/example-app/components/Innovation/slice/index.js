import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { arrayof } from 'prop-types';

import api from '../../../../../store/api';

import { Innovations } from './types';

const url = '/api/rag/innovations';
const options = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
};
export const fetchInnovationData = createAsyncThunk(
  'innovation/fetchInnovationInfoRequested',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(url, options);
      return response;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const innovationSlice = createSlice({
  name: 'innovation',
  initialState: {
    data: Innovations,
    success: false,
    error: false,
    isloading: false,
    message: '',
  },
  reducers: {
    fetchInnovationInfoRequested(state, action) {
      state.data = action.payload;
    },
    fetchInnovationInfoSucceed(state) {
      state.success = true;
    },
    fetchInnovationInfoFailed(state) {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInnovationData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.success = true;
        state.message = 'the data was successfully retrieve';
      })
      .addCase(fetchInnovationData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchInnovationData.rejected, (state) => {
        state.error = true;
        state.message = 'Rejected';
      });
  },
});
export const {
  fetchInnovationInfoRequested,
  fetchInnovationInfoSucceed,
  fetchInnovationInfoFailed,
} = innovationSlice.actions;
export default innovationSlice.reducer;
