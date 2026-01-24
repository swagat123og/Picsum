import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  activeTab: "photos",
  results: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: false, // 👈 important
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1;
      state.results = [];
      state.hasMore = false; // wait for API
    },

    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
      state.page = 1;
      state.results = [];
      state.hasMore = false;
    },

    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },

    setResults: (state, action) => {
      state.loading = false;

      if (state.page === 1) {
        state.results = action.payload;
      } else {
        state.results.push(...action.payload);
      }

      state.hasMore = action.payload.length > 0;
    },

    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.hasMore = false;
    },

    nextPage: (state) => {
      state.page += 1;
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setLoading,
  setResults,
  setError,
  nextPage,
} = searchSlice.actions;

export default searchSlice.reducer;
