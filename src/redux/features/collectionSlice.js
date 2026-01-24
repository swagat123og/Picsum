import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection") || "[]"),
  lastAction: null,
  lastItem: null, // 👈 track which item changed
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exists = state.items.find(
        (item) => item.thumbnail === action.payload.thumbnail
      );

      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
        state.lastAction = "added";
      } else {
        state.lastAction = "exists";
      }

      state.lastItem = action.payload.thumbnail;
    },

    removeCollectionItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.thumbnail !== action.payload
      );
      localStorage.setItem("collection", JSON.stringify(state.items));
      state.lastAction = "deleted";
      state.lastItem = action.payload;
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.setItem("collection", JSON.stringify(state.items));
      state.lastAction = "cleared";
      state.lastItem = null;
    },
  },
});

export const { addItem, removeCollectionItem, clearCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
