import React from "react";
import { useState } from "react";

export default function Welcome()
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

    if(ifClick===false)
    {
    return (<div className='content' onClick={clickHandler}>
        <h1>Witaj na stronie (prawdopodobnie) jedynej krewetki, która tworzy strony internetowe </h1>
        </div>
    );
    }
    else{return(
        <div className='content' onClick={clickHandler}>
        <p> Shrimp jest polską firmą web-deweloperską. 
        Zajmujemy się tworzeniem stron wizytówek, mając na względzie, 
        że profesjonalny wygląd buduje się tworząc
        przejrzysty interface i minimalizując ilość grafik oraz animacji </p>
        </div>);
    }
}