import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Shrimp from "./shrimp";
import Offer from "./offer";
import Contact from "./contact";
import App from './app'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
    {
      path: "/shrimp",
      element: <Shrimp />,
    },

    {
      path: "offer",
      element: <Offer />,
    },
    {
      path: "contact",
      element: <Contact />,
    },]}
]);


export {router as default}