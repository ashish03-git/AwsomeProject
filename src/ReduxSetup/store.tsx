import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./slice";


const store = configureStore({
  reducer: {
    notes:userDetails
  },
});

// from here we are exporting the dispatch type means it will be helpeful to create our typed custom useDispatch and useSelector hook
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
