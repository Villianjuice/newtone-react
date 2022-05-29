import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    gender: 0,
    sortBy: 'title',
    order: 'asc',
    compound: '',
    country: '',
    size: ''
  },
  reducers: {
    setGender(state, action) {
      state.gender = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload
    },
    setOrder(state, action) {
      state.order = action.payload
    },
    setCompound(state, action) {
      state.compound = action.payload.join('&')
    },
    setCountry(state, action) {
      state.country = action.payload.join('&')
    },
    setSize(state, action) {
      state.size = action.payload.join('&')
    }
  },
});

export const { setGender, setSortBy, setOrder, setCompound, setCountry, setSize } = filterSlice.actions;

export default filterSlice.reducer