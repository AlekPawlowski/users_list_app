"use client"
import { IUsers } from "@/interface/IUsers"
import { IUserFormSchema, userFormSchema } from "@/schema/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Path, SubmitHandler, useForm } from "react-hook-form"
import { FormInput } from "./FormInput"
import { supabase } from "@/supabase/config"
import Link from "next/link"
import { FormActionButtons, FormStyle, FormSubmitButton } from "@/styles/SMain"
import { useRouter } from "next/router"

type IUserForm = {
    userData?: IUsers
}

type UsersFormField = {
    label: string;
    inputName: Path<IUserFormSchema>;
    value: string;
}

export const UserForm = ({ userData }: IUserForm) => {
    const userFormFields: UsersFormField[] = [
        {
            label: "Name",
            inputName: "name",
            value: userData ? userData.name || "" : ""
        },
        {
            label: "Username",
            inputName: "username",
            value: userData ? userData.username || "" : ""
        },
        {
            label: "Email",
            inputName: "email",
            value: userData ? userData.email || "" : ""
        },
        {
            label: "City",
            inputName: "city",
            value: userData ? userData.city || "" : ""
        }
    ]

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<IUserFormSchema>({
        resolver: zodResolver(userFormSchema)
    })
    const goToMainSite= () => {
    }
    const onSubmit: SubmitHandler<IUserFormSchema> = async (formValues) => {
        // if userData exist then update element in database, else send new one
        // sideEffect, update redux with income new object from database
        if (userData) {
            const { data, error } = await supabase
                .from('users')
                .update({ ...formValues })
                .eq('id', userData.id)
                .select()
            
        } else {
            const { data, error } = await supabase
                .from('users')
                .insert([formValues])
                .select()
        }
        goToMainSite()
    }

    return <FormStyle onSubmit={handleSubmit(onSubmit)}>
        {
            userFormFields.map(field => {
                const { label, inputName, value } = field;
                return <FormInput key={label} {...field} register={register} errors={errors} />
            })
        }
        <FormActionButtons>
            <Link href="/">Cancel</Link>
            <FormSubmitButton type="submit">Submit</FormSubmitButton>
        </FormActionButtons>
    </FormStyle>
}