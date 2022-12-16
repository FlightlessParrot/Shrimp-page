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
  const method = useForm();

  useEffect(() => {
    method.reset();
  }, [method.formState.isSubmitSuccessful]);

  function submitHandler(data, event) {
    const typeData={type: 'mail', ...data}
    console.log(typeData)
    asynchronus(typeData, validate, message);
    
  }

  return (
    <>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(submitHandler)}>
          <ContactData id={props.id} />
          <Message title={props.title} />
          <SubmitButton></SubmitButton>
          <ErrorMessage control={control} validate={validate}>
            <>{hasError?.message}</>
          </ErrorMessage>
        </form>
      </FormProvider>
    </>
  );
}
