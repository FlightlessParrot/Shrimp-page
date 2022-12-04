import { useEffect } from "react";
import Message from "./message";
import WebElement from "./WebElement";
import ContactData from "./dane";
import { useForm, FormProvider } from "react-hook-form";
import SubmitButton from "./submit_button";
export default function Order(props) {
  const method = useForm({defaultValues: {
    podstrony: '1',
  }});

  useEffect(() => {
    method.reset();
  }, [method.formState.isSubmitSuccessful]);
  function submitHandler(data, e) {
    console.log({...data});
  }

  return (
    <>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(submitHandler)}>
          <ContactData id={props.id} />

          <div className="inactiveContent">
            <span>Ilość podstron</span>
            <input
              type="number"
              {...method.register("podstrony")}
              min="1"
              max="25"
            ></input>
          </div>
          <WebElement
            options={[
              {
                label: "Sklep internetowy",
                name: "sklep_internetowy",
                key: "o1",
              },
              { label: "Płatności online", name: "money", key: "o2" },
              {
                label: "Możliwość modyfikowania treści na stronie",
                name: "adminPanel",
                key: "o3",
              },
              { label: "Forum", name: "forum", key: "o4" },
              { label: "Galeria obrazów", name: "galeria", key: "o5" },
              { label: "Formularz kontaktowy", name: "formularz", key: "o6" },
            ]}
          ></WebElement>
          <Message title={props.title} />
          <SubmitButton></SubmitButton>
        </form>
      </FormProvider>
    </>
  );
}
