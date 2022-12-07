import React, { useEffect, useState } from "react";
import ContactData from "./dane";
import Message from "./message";
import SubmitButton from "./submit_button";
import { useForm, FormProvider } from "react-hook-form";
import asynchronus from '../../asynchronus'
import ErrorMessage from "./error_message";
export default function Mail(props) {
  const [control, validate] = useState(false);
  const [hasError, message] = useState(null);
  const method = useForm({ name: "", mail: "", tel: "", messager: "" });

  useEffect(() => {
    method.reset();
  }, [method.formState.isSubmitSuccessful]);
  function submitHandler(data, e) {
    try {
      asynchronus(data, validate, message);
    } catch (err) {
      console.log(err);
      console.log('ojoj')
      validate(true)
      message(e)
    }
    console.log(data);
  }

  return (
    <>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(submitHandler)}>
          <ContactData id={props.id} />
          <Message title={props.title} />
          <SubmitButton></SubmitButton>
          <ErrorMessage control={control} validate={validate}>
            {hasError}
          </ErrorMessage>
        </form>
      </FormProvider>
    </>
  );
}
