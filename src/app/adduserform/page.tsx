import { UserForm } from "@/components/Forms/UserForm";
import { SectionHead, MainHeader, SmallMain } from "@/styles/SMain";

const AddUserForm = () => {
    return <SmallMain>
        <SectionHead>
            <MainHeader>Add Form</MainHeader>
        </SectionHead>
        <UserForm />
    </SmallMain>
}


 export default AddUserForm;