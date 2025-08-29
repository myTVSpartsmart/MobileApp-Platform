import { createSlice } from "@reduxjs/toolkit";

const receiveItemSlice = createSlice({
  name: "receiveItems",
  initialState: { invoiceNumber: "", items: [] },
  reducers: {
    addReceiveItem: (state, action) => {
      state.invoiceNumber=action.payload.invoiceNumber
      if(action.payload.item){
        state.items.push(action.payload.item); // Set the items array to contain only the new item
      }
    },
    incrementReceiveQty: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.code === action.payload.code
      );
      if (existingItem) {
        existingItem.receiveqty = Number(existingItem.receiveqty)+ 1;
      }
    },
    decrementReceiveQty: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.code === action.payload.code
      );
      if (existingItem && existingItem.receiveqty > 0) {
        existingItem.receiveqty = Number(existingItem.receiveqty)- 1;
      }
    },
    incrementReceiveDamageQty: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.code === action.payload.code
      );
      if (existingItem) {
        existingItem.damageqty  = Number(existingItem.damageqty)+ 1;
      }
    },
    decrementReceiveDamageQty: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.code === action.payload.code
      );
      if (existingItem && existingItem.damageqty > 0) {
        existingItem.damageqty = Number(existingItem.damageqty)- 1;
      }
    },
    removeReceiveItem: (state, action) => {
      console.log('removed successfully ');
      state.items = state.items.filter((item) => action.payload !== item.code);
    },
    changeReceiveQty: (state, action) => {
      const existingItem = state.items.find(
        (item) => item?.code == action.payload.code
      );
      console.log("Receivedqty----", state.items, action.payload.code, existingItem)
      if (existingItem) {
        existingItem.receiveqty = action.payload.receiveqty;
      }
    },
    resetReceiveData: () => {
      return { items: [], changeLocator: false, reason: "" };
    },
  },
});

export const {
  addReceiveItem,
  incrementReceiveQty,
  decrementReceiveQty,
  incrementReceiveDamageQty,
  decrementReceiveDamageQty,
  removeReceiveItem,
  changeReceiveQty,
  resetReceiveData,
} = receiveItemSlice.actions;

export default receiveItemSlice.reducer;
