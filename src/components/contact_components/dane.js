import React from "react";
import { useReducer, useEffect } from "react";
import ValidationMessage from "./validation_message";
import { useFormContext } from "react-hook-form";

export default function ContactData(props) {
  const id = props.id;
  const {register, clearErrors, setError,  formState} =useFormContext()
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
  const [focused, focusion] = useReducer(dispatchFocus, initValueFocus);
  
  useEffect(() =>{
    validation( 0)
    focusion( 0)
  },[formState.isSubmitted])
  useEffect(() => {
    
    !validate.name 
      ?
       setError("name", {
          type: 'value',
          message: "Podaj imię lub firmę."
        })
       : clearErrors("name");
    if (!validate.mail[1] && !validate.tel[1]) {
      setError("mail", { type: "pusty", message: "Podaj mail lub telefon." });
      setError("tel", { type: "pusty", message: "Podaj imię lub firmę." });
    } else {
       clearErrors("mail");
       clearErrors("tel");
    }
  }, 
  [validate, formState.isSubmitted]);

 
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
    last = Number(last);
    if (!Number.isInteger(last)) {
      event.target.value = event.target.value.slice(0, -1);
    }
  }
  function dispatch(prev, action) {
    if(action===0){ return initValue}
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
        const empty2 = emptyHandler(action);
        const ifNine = ifNineHandler(action);
        
        return { ...prev, tel: [empty2, ifNine] };
      }
    } 
  }
  function dispatchFocus(prev, action) {
    if(action===0){ return initValueFocus}
    validation(action);
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
      <div className="inactiveContent">
        <div className="inputer">
          <ValidationMessage
            empty={validate.name}
            wrong="false"
            control={focused.name}
          >
            <label htmlFor={id + "0"}>Imię lub firma</label>
            <input
             {...register('name')}
              id={id+'0'}
              type="text"
              onKeyUp={validation}
              onKeyDown={validation}
              onFocus={focusion}
            ></input>
          </ValidationMessage>
        </div>
        <div className="inputer">
          <ValidationMessage
            empty={validate.mail[0]}
            wrong={validate.mail[1]}
            control={focused.mail}
          >
            <label htmlFor={id + "1"}>adres e-mail</label>
            <input
              {...register("mail")}
              id={id + "1"}
              type="email"
              onKeyUp={validation}
              onFocus={focusion}
            ></input>
          </ValidationMessage>
        </div>
        <div className="inputer">
          <ValidationMessage
            empty={validate.tel[0]}
            wrong={validate.tel[1]}
            control={focused.tel}
          >
            <label htmlFor={id + "2"}>Numer telefonu</label>
            <input
              id={id + "2"}
              type="tel"
              {...register('tel')}
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
