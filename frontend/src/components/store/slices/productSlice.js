import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to upload a product
export const uploadProduct = createAsyncThunk(
  'products/uploadProduct',
  async (productData, { rejectWithValue }) => {
    try {
      // Simulate an API call (you can replace this with a real API request)
      // const response = await api.uploadProduct(productData);
      return productData; // Simulate successful upload
    } catch (error) {
      return rejectWithValue(error.message); // Handle error
    }
  }
);

// Slice for products
const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload); // Add uploaded product to state
      })
      .addCase(uploadProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
