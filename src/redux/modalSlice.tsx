"use client"

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { IUsers } from "@/interface/IUsers";

export type IModalState = {
    isModalActive: boolean;
    user: IUsers | null;
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