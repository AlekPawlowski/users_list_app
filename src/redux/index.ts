"use client"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import modalSlice from "./modalSlice";

const reducer = combineReducers({
    users: userSlice,
    modal: modalSlice
});
export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;