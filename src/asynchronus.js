import { Form } from "react-router-dom"


export default async function form(dataObject, validate, message)
{   
    try
    {
    const data=new FormData();
    for(let key in dataObject)
    {
        data.append(key, dataObject[key])
    }

    const response= await fetch('./public/index.php',
    {method: 'POST', 
    headers:{'Content-Type': 'multipart/form-data'}, 
    body: data
    })
    if(response.ok)
    {
    const ok = await response.formData()
    console.log(response.formData)
    }
    else {
        throw new Error('HTTP error has occured. status: ${response.status}')
    }
    }catch(error)
    {
        validate(true)
        message(error)
    }

}