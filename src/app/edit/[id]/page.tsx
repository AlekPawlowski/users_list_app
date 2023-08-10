"use client"
import { UserForm } from "@/components/Forms/UserForm";
import { IUsers } from "@/interface/IUsers";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react"

const testFormData: IUsers = {
    name: "test name",
    username: "test username",
    id: 1,
    created_at: "",
    email: "test@email.pl",
    city: "test city"
}

const  Edit = ({ params }: { params: { id: string } }) =>{
    // here gonna be code that gets from redux our id and build user object from it, if there is no such user then try in db, if again fail then set error message that user dosent exist
    console.log(params.id);
    return <section>
        <h1>Edit Form</h1>
        <UserForm userData={testFormData}/>
    </section>
  }

export default Edit;