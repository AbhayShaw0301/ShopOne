"use client";
import React, {ComponentProps} from 'react';
import {experimental_useFormStatus as useFormStatus} from "react-dom";

type FormSubmitButtonProps = {
    children:React.ReactNode;
    className?: string;

} & ComponentProps<"button">

const FormSubmitButton = ({className,children,...props}:FormSubmitButtonProps) => {

   const {pending}=useFormStatus();
    return (
        <button {...props} className={`btn btn-primary ${className}`} type="submit" disabled={pending}>
            {pending && <span className="loading loading-dots loading-lg"></span>}
            {children}
        </button>
    );
};

export default FormSubmitButton;