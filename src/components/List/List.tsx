"use client"
import { IUsers } from "@/interface/IUsers";
import { updateUsers } from "@/redux/userSlice";
import { supabase } from "@/supabase/config";
import { useDispatch, useSelector } from "react-redux";
import { ListElement } from "./ListElement";
import { Tabel } from "@/styles/SMain";
import { Fragment, useEffect } from "react";
import { RootState } from "@/redux";
import { DeleteModal } from "../DeleteUser/DeleteModal";

export const List = () => {
    const dispatch = useDispatch();
    const store = useSelector((state: RootState) => state.users.users);
    console.log(store)
    const getUserData = async () => {
        let { data: users, error } = await supabase
            .from('users')
            .select('*')
        if (users) {
            const usersSortedList = users.sort((user, nextUser) => user.id - nextUser.id)
            dispatch(updateUsers(usersSortedList));
        }
    }
    useEffect(() => {
        getUserData();
    }, [])
    if (!store) return <p>Loading...</p>
    if (store.length === 0) return <p>there is no users</p>
    return <Fragment>
        <DeleteModal />
        <Tabel>
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
                    store
                        .map((user, index) => {
                            const { id } = user
                            return <ListElement index={index+1} key={id} element={user} />
                        })
                }
            </tbody>
        </Tabel>
    </Fragment>
}