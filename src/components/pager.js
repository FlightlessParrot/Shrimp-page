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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
            element: <Mail />,
          },
          {
            path: "order",
            element: <Contact />,
          },
        ],
      },
    ]
  }
]);

export { router as default };
