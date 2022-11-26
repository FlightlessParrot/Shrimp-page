import React from "react";
import { useState } from "react";

export default function Story()
{
    const [ifClick, clicked]=useState(false)

    function clickHandler ()
    {
        if(ifClick===true)
        {
        clicked(false)
        }
        else 
        {
            clicked(true)
        }
    }

    return (<div className='content' onclick={clickHandler}></div>)
}