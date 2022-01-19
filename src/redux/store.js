// import { configureStore } from '@reduxjs/toolkit';

import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
export const store = createStore(rootReducer);
