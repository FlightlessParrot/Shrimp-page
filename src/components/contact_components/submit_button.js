import { useState } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./error_message"
import ValidateErrors from "./validate_erros";
export default function SubmitButton() {
    const[blad, aktual]=useState(false)
  const {
    formState: { errors },
  } = useFormContext();
  
  function clickHandler(e) {
    if (errors.name || errors.mail || errors.tel || errors.messager) {
      e.preventDefault();
        aktual(true);
    } else {
      let inter = document.getElementsByTagName("textarea");
      let k = 0;
      do {
        for (let i=0; i < inter.length; i++) {
          let element = inter[i];
          element.blur()
          element.classList.remove("validated","unvalidated" );
          
        }
        k++;
        inter = document.getElementsByTagName("input");
      } while (k < 2);
    }
  }

  return (<>
    <div className="inputer submiter">
      <input type="submit" onClick={clickHandler} value="Wyślij"></input>
    </div>
    <ErrorMessage control={blad} validate={aktual}><ValidateErrors /></ErrorMessage>
    </>
  );
}
