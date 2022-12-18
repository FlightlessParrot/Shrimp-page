import { useEffect, useState } from "react";
import Message from "./message";
import WebElement from "./WebElement";
import ContactData from "./dane";
import { useForm, FormProvider } from "react-hook-form";
import SubmitButton from "./submit_button";
import asynchronus from "../../asynchronus";
import ErrorMessage from "./error_message";

export default function Order(props) {
  const [control, validate] = useState(false);
  const [hasError, message] = useState(null);
  const method = useForm({defaultValues: {
    page: '1',
  }});

  useEffect(() => {
    method.reset();
  }, [method.formState.isSubmitSuccessful]);

  function submitHandler(data, event) {
    const typeData={type: 'order', ...data}
    console.log(typeData)
    asynchronus(typeData, validate, message);
    
  }

  return (
    <>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(submitHandler)}>
          <ContactData id={props.id} />

          <div className="inactiveContent">
            <label htmlFor="'podstrony'">Ilość podstron</label>
            <input
              type="number" 
              name='page'
              id='podstrony'
              {...method.register("page")}
              min="1"
              max="25"
            ></input>
          </div>
          <WebElement
            options={[
              {
                label: "Sklep internetowy",
                name: "sklep",
                key: "o1",
              },
              { label: "Płatności online", name: "money", key: "o2" },
              {
                label: "Możliwość modyfikowania treści na stronie",
                name: "panel",
                key: "o3",
              },
              { label: "Forum", name: "forum", key: "o4" },
              { label: "Galeria obrazów", name: "galeria", key: "o5" },
              { label: "Formularz kontaktowy", name: "formularz", key: "o6" },
            ]}
          ></WebElement>
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
