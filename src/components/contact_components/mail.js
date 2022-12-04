import React, {useEffect} from "react";
import ContactData from "./dane";
import Message from "./message";
import SubmitButton from "./submit_button"
import {useForm,  FormProvider} from "react-hook-form"

export default function Mail(props){
  
    

    const method=useForm({name: '', mail: '', tel: '', messager: ''})
 
    useEffect(()=>{
        
           method.reset()
            }, [method.formState.isSubmitSuccessful])
    function submitHandler(data, e)
    {   
        
        
        console.log(data)
    }
   
    return(
        <>
        <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(submitHandler)}>
        <ContactData id={props.id}  />
        {props.children}
        <Message title={props.title} />
        <SubmitButton></SubmitButton>
        </form></FormProvider>
        </>
    )
}