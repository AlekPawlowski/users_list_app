"use client"
import { IUserFormSchema } from "@/schema/formSchema";
import { ErrorMessage } from "@/styles/SMain";
import { Fragment } from "react";
import { FieldErrors, Path, UseFormRegister } from "react-hook-form";

interface InputProps {
    label: string;
    inputName: Path<IUserFormSchema>;
    register: UseFormRegister<IUserFormSchema>;
    errors: FieldErrors<IUserFormSchema>
    value: string;
}

export const FormInput = ({label, inputName, register, errors, value}: InputProps) => {
    return <Fragment>
        <fieldset>
            <label htmlFor={inputName}>{label}:</label>
            <input type="text" 
                id={inputName} 
                defaultValue={value}
                {...register(`${inputName}`)}
            />
        </fieldset>
        <ErrorMessage>
            {errors[inputName] && errors[inputName]?.message}
        </ErrorMessage>
    </Fragment>
}