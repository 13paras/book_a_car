import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  pagination: {
    currentPage: 1,
    itemsPerPage: 6,
  },
  search: "",
};

const carsSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCars(state, action) {
      state.cars = action.payload;
    },
    setCurrentPage(state, action) {
      state.pagination.currentPage = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setCars, setCurrentPage, setSearch } = carsSlice.actions;

export default carsSlice.reducer;
