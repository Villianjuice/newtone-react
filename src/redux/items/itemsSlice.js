import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk('items, fetchItems', async () => {
  const responce = await fetch('https://628f6d170e69410599dc2f20.mockapi.io/items');
  const data = await responce.json();
  return data;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    isLoad: false,
    error: null,
  },
  extraReducers: {
    [fetchItems.fulfilled]: (state, action) => {
      state.isLoad = true;
      state.items = action.payload;
    }
    // [fetchItems.rejected]: (state) => {
    //   state.isLoad = true;
    //   state.error = null;
    // },
  }, 
});

export default itemsSlice.reducer;

