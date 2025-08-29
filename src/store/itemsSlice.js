import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find(item => item?.itemCode === action.payload.itemCode);
      if (existingItem) {
        // existingItem.qty += action.payload.qty;
        existingItem.qty += 1;
      } else {
        state.push(action.payload);
      }
    },
    incrementQty: (state, action) => {
      const existingItem = state.find(item => item?.itemCode === action.payload.itemCode);
      if (existingItem) {
        existingItem.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const existingItem = state.find(item => item?.itemCode === action.payload.itemCode);
      if (existingItem && existingItem.qty > 0) {
        existingItem.qty -= 1;
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => action.payload !== item.itemCode);
    },
    changeQty: (state, action) => {
      const existingItem = state.find(item => item?.itemCode === action.payload.itemCode);
      if (existingItem) {
        existingItem.qty = action.payload.qty;
      }
    },
    resetData: () => {
      console.log('Deleted Successfully');
      return [];
    }
  }
});

export const { addItem, incrementQty, decrementQty, removeItem, changeQty, resetData } = itemsSlice.actions;

export default itemsSlice.reducer;