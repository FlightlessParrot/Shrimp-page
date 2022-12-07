import React from "react";
import { useState, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export default function Welcome(props)
{
    const node=useRef(null)
    const [ifClick, clicked]=useState(false)
    const textNode1=props.text1
    const textNode2=props.text2
    function clickHandler ()
    {   
        clicked(!ifClick)
     
    }


return(
    <SwitchTransition>
        <CSSTransition
        key={ifClick ? 'hi' : 'bye'}
        nodeRef={node}
        classNames='content'
        timeout={500}
        ><div  onClick={clickHandler} ref={node} className='content'>
        {ifClick ? textNode1 : textNode2}
        </div>

        </CSSTransition>
    </SwitchTransition>
)

}