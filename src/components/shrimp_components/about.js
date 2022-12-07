import React from "react";
import {useState} from "react";

export default function About(){
    const [ifClick, clicked]=useState(false)

    function clickHandler()
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
    if(ifClick===false)
    {
    return(<div className='content' onClick={clickHandler}>
        <p> Nasza oferta jest skierowana do klientów, którzy chcą mieć reprezentatywną stronę internetową. 
            Takie strony są nazywane stronami "wizytówkami" i pełnią rolę reprezentacyjno - informacyjną.
        </p>
    </div>);
    }
    else
    {
        return(<div className='content' onClick={clickHandler}>
        <p> Strona wizytówka służy trzem celom:</p>
            <ol>
                <li>
                Podkreśleniu profesjonalizmu prowadzonego biznesu.
                </li>
                <li>
                Dotarciu do nowych klientów.
                </li>
                <li>
                Ułatwieniu kontaktu z firmą.
                </li>
            </ol>
        
    </div>);
    }
}