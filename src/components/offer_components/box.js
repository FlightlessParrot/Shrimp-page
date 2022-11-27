import React from "react";
import {Link} from 'react-router-dom'

export default function Box(props){
    return(
        <Link className="box" to={props.link}>{props.name}</Link>

    )
}