"use client"
import { UserForm } from "@/components/Forms/UserForm";
import { RootState } from "@/redux";
import { MainHeader, SectionHead, SmallMain } from "@/styles/SMain";
import { useSelector } from "react-redux";

const  Edit = ({ params }: { params: { id: string } }) =>{
    // here gonna be code that gets from redux our id and build user object from it, if there is no such user then try in db, if again fail then set error message that user dosent exist
    const store = useSelector((store: RootState) => store.users.users);
    if(!store) return <p>Users dosent exist</p>
    
    const user = store.filter((user) => user.id === Number(params.id))[0];
    return <SmallMain>
        <SectionHead>
            <MainHeader>Edit Form</MainHeader>
        </SectionHead>
        <UserForm userData={user}/>
    </SmallMain>
  }

export default Edit;