import { useEffect } from "react"
import { useFormContext } from "react-hook-form"

export default function ErrorMessage(props)
{
   
    let rama=props.control ? 'error' : 'hidden'
    let obekt= props.control ? '' : 'hidden'
    let blur= props.control ? 'blur' : 'hidden'
    const {formState: {errors}}=useFormContext()
      console.log(errors)
      function ClickHandler(e)
        {
            e.preventDefault()
            props.validate(false)
          
        }
    return (<>
       <div className={blur} ></div>
        <div id='mailError' className={rama} >
        <p className={obekt}>
        
        {errors.name?.message}<br />
        {errors.mail?.message}<br />
        {errors.messager?.message}<br />
        </p>
        <button onClick={ClickHandler} className={obekt}>X</button>
        </div></>
    );

}