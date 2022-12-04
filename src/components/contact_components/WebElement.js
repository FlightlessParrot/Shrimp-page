import { useFormContext } from "react-hook-form"


export default function WebElement(props)
{
 const {register}=useFormContext()
    const listItem = props.options.map(
        (element)=>{
            
                return <div key={element.key}><label>{element.label}</label> <input type='checkbox' {...register(element.name) }id={element.key} ></input></div>
            })

 
    return(<div className='inactiveContent'>
     {listItem} 
    </div>
    )
}