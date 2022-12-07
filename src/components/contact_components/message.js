import React, { useEffect, useState } from "react";
import emptiness from "./empty.js";
import { useFormContext } from "react-hook-form";

export default function Message(props) {
  const [validate, validation] = useState(false);
  const { register, clearErrors, setError, formState } = useFormContext();
  useEffect(() => {
    validation(false);
    console.log("kra");
  }, [formState.isSubmitSuccessful]);

  useEffect(() => {
    console.log(validate);
    if (!validate) {
      setError("messager", { type: "pusty", message: "Napisz wiadomość" });
    } else {
      clearErrors("messager");
    }
  }, [validate, formState.errors])

  function valid(event) {
    validation(emptiness(event.target));
  }
  return (
    <>
      <div className="inactiveContent">
        <p>{props.title}</p>
        <div>
          <textarea
         maxLength='800'
            {...register("messager", {required: true,  maxLength: 800})}
            onFocus={valid}
            onKeyUp={valid}
          ></textarea>
        </div>
      </div>
    </>
  );
}
