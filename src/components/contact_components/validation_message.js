import React from "react";

export default function ValidationMessage(props) {
  if (props.control) {
    const wrong = !props.wrong ? { display: "inline" } : { display: "none" };
    const empty = !props.empty ? { display: "inline" } : { display: "none" };
    return (
      <>
        {props.children}
        <span style={empty} className='errorMessage'>Uzupełnj dane. </span>
        <span style={wrong} className='errorMessage'>Wprowadzone dane są niepoprawne.</span>
      </>
    );
  }
  return props.children
}
