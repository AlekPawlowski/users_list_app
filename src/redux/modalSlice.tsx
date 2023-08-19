"use client"

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IUsers } from "@/interface/IUsers";

type Data = {
    name: string;
}

export type IModalState = {
    isModalActive: true;
    user: IUsers;
} | {
    isModalActive: false;
    user: null
}

const initalModalState: IModalState = {
    isModalActive: false,
    user: null
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState: initalModalState,
    reducers: {
        modalShownStatusChange: (state, action: PayloadAction<IModalState>) => {
            state.isModalActive = action.payload.isModalActive
            state.user = action.payload.user
        }
    },
})

export const { modalShownStatusChange } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal.isModalActive;
export default modalSlice.reducer;