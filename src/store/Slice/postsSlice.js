import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// create post api
export const createPost = createAsyncThunk(
  "ownProfile/createPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://680e13a2c47cb8074d9205ca.mockapi.io/card",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read data
export const showPost = createAsyncThunk(
  "showPost",
  async (rejectWithValue) => {
    const response = fetch("https://680e13a2c47cb8074d9205ca.mockapi.io/card");
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const ownProfile = createSlice({
  name: "ownProfile",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create post
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.unshift(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Show posts
      .addCase(showPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(showPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(showPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ownProfile.reducer;
