import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import putawayReducer from './PutawaySlice';
import pickReducer from "./pickSlice";
import receiveReducer from "./receiveSlice";
import scanReducer from "./scanSlice";
const store = configureStore({
  reducer: {
    items: itemsReducer,
    putawayItem: putawayReducer,
    pickItem: pickReducer,
    receiveItems: receiveReducer,
    scanItems: scanReducer,
  }
});

export default store;