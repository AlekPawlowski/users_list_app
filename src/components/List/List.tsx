"use client"
import { updateUsers } from "@/redux/userSlice";
import { supabase } from "@/supabase/config";
import { useDispatch, useSelector } from "react-redux";
import { ListElement } from "./ListElement";
import { Tabel, TabelContainer } from "@/styles/SMain";
import { useEffect } from "react";
import { RootState } from "@/redux";
import { DeleteModal } from "../DeleteUser/DeleteModal";
import { SortList } from "./SortList";
import { getUserData } from "@/supabase/getUsers";

export const List = () => {
    const dispatch = useDispatch();
    const store = useSelector((state: RootState) => state.users.users);
    console.log(store)
    
    useEffect(() => {
        // update only if dosent exist, it will update by any action later
        if (!store) {
            (async function(){
                const data = await getUserData();
                dispatch(updateUsers(data));
            })()
        }
    }, [])
    if (!store) return <p>Loading...</p>
    if (store.length === 0) return <p>there is no users</p>
    return <TabelContainer>
        <DeleteModal />
        <SortList />
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
                            return <ListElement index={index + 1} key={id} element={user} />
                        })
                }
            </tbody>
        </Tabel>
    </TabelContainer>
}