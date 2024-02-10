import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";

// here we are defining our custom dispatch function with adding type which we have exported from store.
export const useCustomDispatch = () => useDispatch<AppDispatch>();

// here we are defining our custom useSelector function with adding type which we have exported from store
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
