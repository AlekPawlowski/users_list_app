"use client"
import { IUsers } from "@/interface/IUsers";
import { updateUsers } from "@/redux/userSlice";
import { supabase } from "@/supabase/config";
import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

export const List = () => {
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state.users.users);

    // const getUserData = async () => {
    //     let { data: users, error } = await supabase
    //         .from('users')
    //         .select('*')
    //     if(users){
    //         dispatch(updateUsers(users))
    //     }
    // }
    // getUserData();
    // console.log(state);
    return <Fragment>
        Fragment
    </Fragment>
}