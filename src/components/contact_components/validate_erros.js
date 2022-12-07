import React from 'react'
import { useFormContext } from 'react-hook-form'
export default function ValidateErrors()
{
const {formState: {errors}}=useFormContext()
return(<>
{errors.name?.message}<br />
        {errors.mail?.message}<br />
        {errors.messager?.message}<br /></>
    
)
}