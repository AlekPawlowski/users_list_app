"use client"

import { IUsers } from "@/interface/IUsers";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

type TUserState = {
    users: IUsers[] | null
}

const initalUserState: TUserState = {
    users: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState: initalUserState,
    reducers: {
        updateUsers: (state, action: PayloadAction<IUsers[] | null>) => {
            state.users = action.payload
        },
        sortUsers: (state, action: PayloadAction<string>) => {
            if (state.users) {
                state.users = state.users?.slice().sort((a, b) => {
                    if (action.payload === "username") {
                        if (a.username && b.username) {
                            return a.username < b.username ? -1 : 0
                        } else {
                            return 0
                        }
                    }
                    return a.id - b.id;
                })
            } else{
                throw new Error ("there is nothing to sort")
            }
        }
    },
})

export const { updateUsers, sortUsers } = userSlice.actions;
export const selectUser = (state: RootState) => state.users.users;
export default userSlice.reducer;