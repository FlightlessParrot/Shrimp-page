import React from "react";
import logo from './../imported_images/logo_beztla.png'
export default function Foot(){

    return(
        <footer>
            <img src={logo} height='100px' width='100px'/>
            <span>
            <p className="companyName"> Shrimp Konrad Strauss </p>
            <p> NIP: 7792529339<br />
                adres korespondencyjny: ul. Saperów Tczewskich 7c/2, 83-110 Tczew<br />
                tel. 533 933 018<br />
            </p></span>
        </footer>
    )
}