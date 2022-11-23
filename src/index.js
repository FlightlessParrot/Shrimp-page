import React from "react";
import ReactDOM from "react-dom/client";
import router from './components/pager'
import { RouterProvider } from "react-router-dom";
import './style/style.scss'



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
