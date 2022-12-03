import React from "react";
import { useRef, useReducer,useEffect } from "react";
import ValidationMessage from "./validation_message";

export default function ContactData(props) {
  const id = props.id;
  useEffect(()=>{
    let value={name: nameRef.value, mail: mailRef.value, tel: phoneRef.value}
    props.value(...value)
    for(let x in value)
    {
      value[c]='0'
    }
    dispatch(initValue)
    dispatchFocus(initValueFocus)
  },[props.submit])
 
  const initValue = {
    name: false,
    mail: [false, false],
    tel: [false, false],
  };
  const initValueFocus = {
    name: false,
    mail: false,
    tel: false,
  };
  const [validate, validation] = useReducer(dispatch, initValue);
  const [focused, focusion] = useReducer(dispatchFocus, initValueFocus)
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);

  function emptyHandler(event) {
    event.target.value = event.target.value.trim();
    while (event.target.value.length > 30) {
      event.target.value = event.target.value.slice(0, -1);
    }

    if (event.target.value.trim() !== "") {
      event.target.classList.remove("unvalidated");
      event.target.classList.add("validated");
      return true;
    } else {
      event.target.classList.remove("validated");
      event.target.classList.add("unvalidated");
      return false;
    }
  }

  function mailHandler(event) {
    const e = event.target;
    if (e.value.includes("@") && e.value.includes(".")) {
      e.classList.remove("unvalidated");
      e.classList.add("validated");
      return true;
    } else {
      e.classList.remove("unvalidated");
      e.classList.add("unvalidated");
      return false;
    }
  }

  function ifNineHandler(event) {
    const ifNine = event.target.value.length > 8 ? true : false;
    if (!ifNine) {
      event.target.classList.remove("validated");
      event.target.classList.add("unvalidated");
    }
    return ifNine;
  }
  function onlyNumberHandler(event) {
    let last = event.target.value.slice(-1);
    console.log(Number.isInteger(last));
    last = Number(last);
    if (!Number.isInteger(last)) {
      event.target.value = event.target.value.slice(0, -1);
    }
  }
  function dispatch(prev, action) {
    const empty = emptyHandler(action);
    switch (action.target.id) {
      case id + "0": {
        return { ...prev, name: empty };
      }
      case id + "1": {
        const ifMail = mailHandler(action);
        return { ...prev, mail: [empty, ifMail] };
      }
      case id + "2": {
        onlyNumberHandler(action);
        const ifNine = ifNineHandler(action);
        return { ...prev, tel: [empty, ifNine] };
      }
    }
  }
  function dispatchFocus(prev, action){
    validation(action)
    switch (action.target.id) {
      case id + "0": {
        return { ...prev, name: true };
      }
      case id + "1": {
        return { ...prev, mail: true };
      }
      case id + "2": {
        return { ...prev, tel: true };
      }
    }
  }
  return (
    <>
      <div className="content">
        <div>
          <ValidationMessage empty={validate.name} wrong="false" control={focused.name}>
            <label htmlFor={id + "0"}>Imię lub firma</label>
            <input
              id={id + "0"}
              type="text"
              name={id + "0"}
              onKeyUp={validation}
              onKeyDown={validation}
              ref={nameRef}
              onFocus={focusion}
            ></input>
          </ValidationMessage>
        </div>
        <div>
          <ValidationMessage empty={validate.mail[0]} wrong={validate.mail[1]} control={focused.mail}>
            <label htmlFor={id + "1"}>adres e-mail</label>
            <input
              id={id + "1"}
              name={id + "1"}
              type="email"
              ref={mailRef}
              onKeyUp={validation}
              onFocus={focusion}
            ></input>
          </ValidationMessage>
        </div>
        <div>
          <ValidationMessage empty={validate.tel[0]} wrong={validate.tel[1]} control={focused.tel}>
            <label htmlFor={id + "2"}>Numer telefonu</label>
            <input
              id={id + "2"}
              name={id + "2"}
              type="tel"
              ref={phoneRef}
              onKeyUp={validation}
              onKeyDown={validation}
              onFocus={focusion}
            ></input>
          </ValidationMessage>
        </div>
      </div>
    </>
  );
}
