import React from "react";
import { useEffect } from "react";
import {NavLink, Outlet, useNavigate, useLocation} from "react-router-dom";
import Foot from './foot'

export default function App()
{
 useChangeRoute();
  
    return (<>
    <nav>
        <ul>
            <li>
        <NavLink to="shrimp" className="navLink">Shrimp</NavLink>
        </li>
        <li>
        <NavLink to="offer" className="navLink">Offer</NavLink>
        </li>
        <li>
        <NavLink to="contact" className="navLink">Contact</NavLink>
        </li>
        </ul>
        
    </nav>
    <Outlet />
    <Foot />
    </>
    )
    
}
function useChangeRoute(){
    const location=useLocation();
    const navigate=useNavigate();
   
    useEffect(()=>{
    location.pathname==="/" && navigate("/shrimp")},[location.pathname, navigate])

}