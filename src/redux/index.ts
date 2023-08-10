import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { createWrapper } from "next-redux-wrapper";

// const reducer = combineReducers({
//     users: userSlice
// });
// export const store = configureStore({ reducer });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

const reducerStore = () => configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer
    },
    devTools: true
})

export type RootStore = ReturnType<typeof reducerStore>
export type RootState = ReturnType<RootStore["getState"]>;


export const wrapper = createWrapper<RootStore>(reducerStore);