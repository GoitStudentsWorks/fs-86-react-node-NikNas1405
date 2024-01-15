import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts, fetchAllProductsCategories } from './productsOperation';

const initialState = {
  productsArray: [],
  productsCategories: [],
  isLoading: false,
  isFilter: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchFilteredProductsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.isFilter = true;
  state.productsArray = action.payload;
};

const handleFetchAllProductsCategoriesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.productsCategories = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.fulfilled, handleFetchFilteredProductsFulfilled)
      .addCase(fetchProducts.rejected, handleRejected)
      .addCase(fetchAllProductsCategories.pending, handlePending)
      .addCase(
        fetchAllProductsCategories.fulfilled,
        handleFetchAllProductsCategoriesFulfilled
      )
      .addCase(fetchAllProductsCategories.rejected, handleRejected),
});

export const productsReducer = productsSlice.reducer;
