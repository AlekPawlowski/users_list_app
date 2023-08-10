"use client"

import { IUsers } from "@/interface/IUsers"
import { Fragment } from "react";

interface IListElement {
    element: IUsers;
}

export const ListElement = ({element}: IListElement) => {
    const {id, name, username, email, city} = element;
    return <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{city}</td>
        <td>Edit</td>
        <td>Delete</td>
    </tr>
}