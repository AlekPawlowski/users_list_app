"use client"
import { IUsers } from "@/interface/IUsers"
import { IUserFormSchema, userFormSchema } from "@/schema/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Path, SubmitHandler, useForm } from "react-hook-form"
import { FormInput } from "./FormInput"
import { supabase } from "@/supabase/config"
import Link from "next/link"
import { FormActionButtons, FormStyle, FormSubmitButton } from "@/styles/SMain"
import { useRouter } from "next/navigation"
import { getUserData } from "@/supabase/getUsers"
import { useDispatch } from "react-redux"
import { updateUsers } from "@/redux/userSlice"

type IUserForm = {
    userData?: IUsers
}

type UsersFormField = {
    label: string;
    inputName: Path<IUserFormSchema>;
}

const userFormFields: UsersFormField[] = [
    {
        label: "Name",
        inputName: "name",
    },
    {
        label: "Username",
        inputName: "username",
    },
    {
        label: "Email",
        inputName: "email",
    },
    {
        label: "City",
        inputName: "city",
    }
]

export const UserForm = ({ userData }: IUserForm) => {
    const dispatch = useDispatch();

    const isEditMode=userData

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<IUserFormSchema>({
        defaultValues: {
            username: isEditMode ? userData.username || "" : "",
            email: isEditMode ? userData.email || "" : "",
             city: isEditMode ? userData.city || "" : "",
            name: isEditMode ? userData.name || "" : ""
        },
        resolver: zodResolver(userFormSchema)
    })
    const router = useRouter();
    const goToMainSite= () => {
        router.push("/")
    }
    const onSubmit: SubmitHandler<IUserFormSchema> = async (formValues) => {
        // if userData exist then update element in database, else send new one
        // sideEffect, update redux with income new object from database
        if (isEditMode) {
            const { data, error } = await supabase
                .from('users')
                .update({ ...formValues })
                .eq('id', userData.id)
                .select()
            // TODO: wyciagnac z reduxa id i je podmienic a nie z zappytania do bazy
            //    dispatch(updateUsers(...selectoremToCoBylo,data))
            if(!error){
                alert("User data edit successfully");
            }else{
                alert(`Add was break beacuse of ${error}`)
            }
        } else {
            const { data, error } = await supabase
                .from('users')
                .insert([formValues])
                .select()
            if(!error){
                alert("User was added successfully");
            }else{
                alert(`Add was break beacuse of ${error}`)
            }
        }
        (async function(){
            const data = await getUserData();
            dispatch(updateUsers(data));
        })()
        goToMainSite()
    }

    return <FormStyle onSubmit={handleSubmit(onSubmit)}>
        {
            userFormFields.map(field => {
                const { label, inputName } = field;
                return <FormInput key={label} {...field} register={register} errors={errors} />
            })
        }
        <FormActionButtons>
            <Link href="/">Cancel</Link>
            <FormSubmitButton type="submit">Submit</FormSubmitButton>
        </FormActionButtons>
    </FormStyle>
}