"use client"

import { IUsers } from "@/interface/IUsers"
import Link from "next/link";
import { Fragment } from "react";
import { DeleteUserButton } from "../DeleteUser/DeleteUserButton";
import { OrangeElement } from "@/styles/SMain";

interface IListElement {
    element: IUsers;
    index: number;
}

export const ListElement = ({element, index}: IListElement) => {
    const {id, name, username, email, city} = element;
    return <tr>
        <td>{index}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{email}</td>
        <td>{city}</td>
        <td><OrangeElement><Link href={`/edit/${id}`}>edit</Link></OrangeElement></td>
        <td><DeleteUserButton user={element}/></td>
    </tr>
}