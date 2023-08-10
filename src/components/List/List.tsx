"use client"
import { IUsers } from "@/interface/IUsers";
import { updateUsers } from "@/redux/userSlice";
import { supabase } from "@/supabase/config";
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { ListElement } from "./ListElement";

export const List = () => {
    const [usersList, setUsersList] = useState<IUsers[] | null>(null);
    const getUserData = async () => {
        let { data: users, error } = await supabase
            .from('users')
            .select('*')
        if (users) {
            // dispatch(updateUsers(users))
            setUsersList(users);
        }
    }
    getUserData();
    if (!usersList) return <p>no users</p>
    return <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Username</td>
                <td>Email</td>
                <td>City</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            {
                usersList
                    .sort((user, nextUser) => user.id - nextUser.id)
                    .map((user) => {
                        const { id } = user
                        return <ListElement key={id} element={user} />
                    })
            }
        </tbody>
    </table>
}