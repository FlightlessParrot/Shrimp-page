import React from "react";
import { useState } from "react";

export default function Story()
{const [ifClick, clicked]=useState(false)

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
        <p> Shrimp to nazwa, która może zaskakiwać. Krewetki nie kojarzą się z komputerami, stronami internetowymi, ani programowaniem. 
            Jednak nie ma innego zwierzęcia, które byłoby tak bardzo zbliżone do steraotypowego obrazu programisty.
        </p>
    </div>);
    }
    else
    {
        return(<div className='content' onClick={clickHandler}>
        <p> Krewetka do zwierzę, żyjące na dnie mórz (piwnicy świata), ma wiele odnóży (do pisania kodu) 
            i wielkie czarne oczy (do wpatrywania się w monitor). Na tym dnie morza spokojnie zajmuje się swoją pracą,
            nie zwracając uwagi na to, co się dzieje powyżej. Jak programista!
            </p>
        
    </div>);
    }
}