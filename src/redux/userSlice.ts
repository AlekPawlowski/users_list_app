import { IUsers } from "@/interface/IUsers";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

type TUserState = {
    users: IUsers[]
}

const initalUserState: TUserState = {
    users: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState: initalUserState,
    reducers: {
        updateUsers: (state, action: PayloadAction<IUsers[]>) => {
            state.users = action.payload
        }
    }
})

export const {updateUsers} = userSlice.actions;
export const selectUser = (state: RootState) => state.users.users;
export default userSlice.reducer;