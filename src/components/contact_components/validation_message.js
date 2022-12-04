import React from "react";

export default function ValidationMessage(props) {
  
  const wrong = props.control && !props.wrong ? { display: "inline" } : { display: "none" };
  const empty = props.control && !props.empty ? { display: "inline" } : { display: "none" };

    
  
    return (
      <>
        {props.children}
        <span style={empty} className='errorMessage'>Uzupełnj dane. </span>
        <span style={wrong} className='errorMessage'>Wprowadzone dane są niepoprawne.</span>
      </>
    );

}
