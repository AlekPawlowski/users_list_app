import { UserForm } from "@/components/Forms/UserForm";
import { SectionHead, MainHeader, SmallMain } from "@/styles/SMain";
import { Fragment } from "react"

const AddUserForm = () => {
    return <SmallMain>
        <SectionHead>
            <MainHeader>Add Form</MainHeader>
        </SectionHead>
        <UserForm />
    </SmallMain>
}


 export default AddUserForm;