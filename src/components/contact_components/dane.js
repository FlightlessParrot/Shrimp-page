import React from "react";
import { useRef, useReducer} from "react";

export default function ContactData(props) {
  const id = props.id;
  const initValue={
    name: false,
    mail: [false,false],
    tel: false
  }
  const [validate, validation]=useReducer(dispatch,initValue)
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
    } 
    else {
      event.target.classList.remove("validated");
      event.target.classList.add("unvalidated");
      return false;
    }
  }

  function mailHandler(event) {
    if (emptyHandler(event)) {
      const e = event.target;
      if (!e.value.includes("@")) {
        e.classList.remove("validated");
        e.classList.add("unvalidated");
        return true;
      }
      return false;
    }
    return false;
  }

  function dispatch(prev, action){
   const empty=emptyHandler(action)
   console.log(prev)
   switch(action.target.id)
   {
    case id+'0':{return({...prev,name: empty})}
    case id+'1':{return({...prev,mail: [empty, prev.mail[1]]})}
    case id+'2':{return({...prev,tel: empty})}
   }
  }

  return (
    <>
      <div className="content">
        <div>
          <label htmlFor={id + "0"}>Imię lub firma</label>
          <input
            id={id + "0"}
            type="text"
            onKeyUp={validation}
            ref={nameRef}
          ></input>
        </div>
        <div>
          <label htmlFor={id + "1"}>adres e-mail</label>
          <input
            id={id + "1"}
            type="email"
            ref={mailRef}
            onKeyUp={validation}
          ></input>
        </div>
        <div>
          <label htmlFor={id + "3"}>Numer telefonu</label>
          <input
            id={id + "3"}
            type="tel"
            ref={phoneRef}
            onKeyUp={validation}
          ></input>
        </div>
      </div>
    </>
  );
}
