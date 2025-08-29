import { createSlice } from '@reduxjs/toolkit';
 
const putawayItemSlice = createSlice({
  name: 'putawayItem',
  initialState: { items: [], changeLocator: false, reason: '' },
  reducers: {
    addPutawayItem: (state, action) => {
      state.items = [action.payload]; // Set the items array to contain only the new item
    },
    incrementPutawayQty: (state, action) => {
      const existingItem = state.items.find(item => item?.code === action.payload.code);
      if (existingItem) {
        existingItem.qty += 1;
      }
    },
    decrementPutawayQty: (state, action) => {
      const existingItem = state.items.find(item => item?.code === action.payload.code);
      if (existingItem && existingItem.qty > 0) {
        existingItem.qty -= 1;
      }
    },
    removePutawayItem: (state, action) => {
      state.items = state.items.filter(item => action.payload !== item.code);
    },
    changePutawayQty: (state, action) => {
      const existingItem = state.items.find(item => item?.code === action.payload.code);
      if (existingItem) {
        existingItem.qty = action.payload.qty;
      }
    },
    changeLocator: (state, action) => {
      state.changeLocator = action.payload.changeLocator;
      state.reason = action.payload.reason;
    },
    resetPutwayData: () => {
      return { items: [], changeLocator: false, reason: '' };
    }
  }
});
 
export const { addPutawayItem, incrementPutawayQty, decrementPutawayQty, removePutawayItem, changePutawayQty, changeLocator, resetPutwayData } = putawayItemSlice.actions;
 
export default putawayItemSlice.reducer;