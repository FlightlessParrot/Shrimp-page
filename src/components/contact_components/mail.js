import React,{useState} from "react";
import ContactData from "./dane";
import Message from "./message";

export default function Mail(){
    const data={}
    const[submit,send]=useState(false)

    function collectData(object){
        data={...data, object}
    }
    return(
        <>
        <ContactData id='mailContact' submit={submit} value={collectData} />
        <Message title='Treść wiadomości' submit={submit} value={collectData}/>
        </>
    )
}