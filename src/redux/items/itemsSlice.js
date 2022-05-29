import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async (params) => {
  const { sortBy, gender, compound, country, size } = params;
  const { data } = await axios.get(
    `https://628f6d170e69410599dc2f20.mockapi.io/items?sex=${gender}&compound=${compound}&country=${country}&variants=${size}&sortBy=${sortBy}&order=asc`,
  );
  return data;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    itemsMan: [],
    itemsWoman: [],
    isLoad: false,
    error: null,
  },
  extraReducers: {
    [fetchItems.fulfilled]: (state, action) => {
      state.isLoad = true;
      state.items = action.payload;
    }
  },
});

export default itemsSlice.reducer;
