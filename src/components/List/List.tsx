"use client"
import { supabase } from "@/supabase/config";
import { Fragment, useEffect } from "react"

export const List = () => {
    const getUserData = async () => {
        let { data: users, error } = await supabase
            .from('users')
            .select('*')
    }
    getUserData();
    return <Fragment>laksjdf;lkasj</Fragment>
}