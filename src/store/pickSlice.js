// import { createSlice } from "@reduxjs/toolkit";

// const pickItemSlice = createSlice({
//   name: "pickItem",
//   initialState: [],
//   reducers: {
//     addPickItem: (state, action) => {
//         const existingItem = state.find(item => item?.itemCode === action.payload.itemCode);
//         if (existingItem) {
//         //   existingItem.qty += action.payload.qty;
//           existingItem.qty += 1;
//         } else {
//           state.push(action.payload);
//         }
//     },
//     incrementPickyQty: (state, action) => {
//         const existingItem = state.find(item => item?.itemCode === action.payload.itemCode);
//         if (existingItem) {
//           existingItem.qty += 1;
//         }
//     },
//     decrementPickQty: (state, action) => {
//         const existingItem = state.find(item => item?.itemCode === action.payload.itemCode);
//         if (existingItem && existingItem.qty > 0) {
//           existingItem.qty -= 1;
//         }
//     },
//     removePickItem: (state, action) => {
//         return state.filter(item => action.payload !== item.itemCode);
//     },
//     changePickQty: (state, action) => {
//         const existingItem = state.find(item => item?.itemCode == action.payload.itemCode);
//         if (existingItem) {
//           existingItem.qty = action.payload.qty;
//         }
//     },
//     resetPickData: () => {
//       return [];
//     },
//   },
// });

// export const {
//   addPickItem,
//   incrementPickyQty,
//   decrementPickQty,
//   removePickItem,
//   changePickQty,
//   resetPickData,
// } = pickItemSlice.actions;

// export default pickItemSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const pickItemSlice = createSlice({
  name: "pickItem",
  initialState: [],
  reducers: {
    addPickItem: (state, action) => {
        const existingItem = state.find(item => item?.barcode === action.payload.barcode);
        if (existingItem) {
        //   existingItem.qty += action.payload.qty;
          existingItem.qty += 1;
        } else {
          state.push(action.payload);
        }
    },
    incrementPickyQty: (state, action) => {
        const existingItem = state.find(item => item?.barcode === action.payload.barcode);
        if (existingItem) {
          existingItem.qty += 1;
        }
    },
    decrementPickQty: (state, action) => {
        const existingItem = state.find(item => item?.barcode === action.payload.barcode);
        if (existingItem && existingItem.qty > 0) {
          existingItem.qty -= 1;
        }
    },
    removePickItem: (state, action) => {
        return state.filter(item => action.payload !== item.barcode);
    },
    changePickQty: (state, action) => {
        const existingItem = state.find(item => item?.barcode == action.payload.barcode);
        if (existingItem) {
          existingItem.qty = action.payload.qty;
        }
    },
    resetPickData: () => {
      return [];
    },
  },
});

export const {
  addPickItem,
  incrementPickyQty,
  decrementPickQty,
  removePickItem,
  changePickQty,
  resetPickData,
} = pickItemSlice.actions;

export default pickItemSlice.reducer;
