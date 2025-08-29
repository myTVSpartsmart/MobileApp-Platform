import { createSlice } from "@reduxjs/toolkit";

const scanItemList = createSlice({
  name: "scanItems",
  initialState: { items: [] },
  reducers: {
    addScanItem: (state, action) => {(state.items = action.payload)}, // Directly assigning the items array
    resetscanData: () => {
      return { items: [] };
    },
  },
});

export const { addScanItem, resetscanData } = scanItemList.actions;

export default scanItemList.reducer;
