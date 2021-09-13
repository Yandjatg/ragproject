import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { arrayof } from 'prop-types';

import api from '../../../../../store/api';

import { Diasporas } from './types';

const url = '/api/rag/diasporas';
const options = {
  method: 'GET',
  headers: { 'content-type': 'application/json' },
};
export const fetchDiaporaData = createAsyncThunk(
  'diaspora/fetchDiasporaInfoRequested',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(url, options);
      return response;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const diasporaSlice = createSlice({
  name: 'diaspora',
  initialState: {
    data: Diasporas,
    success: false,
    error: false,
    isloading: false,
    message: '',
  },
  reducers: {
    fetchDiasporaInfoRequested(state, action) {
      state.data = action.payload;
    },
    fetchDiasporaInfoSucceed(state) {
      state.success = true;
    },
    fetchDiasporaInfoFailed(state) {
      state.error = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiaporaData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.success = true;
        state.message = 'the data was successfully retrieve';
      })
      .addCase(fetchDiaporaData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchDiaporaData.rejected, (state) => {
        state.error = true;
        state.message = 'Rejected';
      });
  },
});
export const {
  fetchDiasporaInfoRequested,
  fetchDiasporaInfoSucceed,
  fetchDiasporaInfoFailed,
} = diasporaSlice.actions;
export default diasporaSlice.reducer;
