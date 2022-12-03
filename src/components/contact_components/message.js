import React, { useState, useEffect, useRef } from "react";
import emptiness from "./empty.js"

export default function Message(props)
{
    const [validate, validation]=useState(false)
    const messageRef=useRef(null)
    useEffect(()=>{let value={message: messageRef.value}
    props.value(...value)
    },[props.submit])
    function valid(event)
    {
        validation(emptiness(event.target))

    }
    return(
<>
<div className="content">
    <p>{props.title}</p>
    <textarea ref={messageRef} onFocus={valid} onKeyUp={valid}></textarea>
</div>
</>
    );
}