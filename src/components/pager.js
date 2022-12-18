import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Shrimp from "./shrimp";
import Offer from "./offer";
import Contact from "./contact";
import App from "./app";
import First from "./offer_components/first";
import Second from "./offer_components/second";
import Third from "./offer_components/third";
import Mail from "./contact_components/mail";
import Order from "./contact_components/order";
import Redirect from "./redirect";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "index.html",
        element: <Redirect />,
      },
      {
        path: "shrimp",
        element: <Shrimp />,
      },

      {
        path: "offer",
        element: <Offer />,
        children: [
          { path: "first", element: <First /> },
          {
            path: "second",
            element: <Second />,
          },
          {
            path: "third",
            element: <Third />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
        children: [
          {
            path: "mail",
            element: <Mail title='Treść wiadomości' id='mailContact'/>,
          },
          {
            path: "order",
            element: <Order title='Opis zamówienia' id='orderContact'/>
          },
        ],
      },
    ]
  }
]);

export { router as default };
