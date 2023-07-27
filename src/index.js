import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App4 from './app';
import {BrowserRouter} from "react-router-dom";
//import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"))




root.render(

    <React.StrictMode>

    <BrowserRouter>
      <App4 />
    </BrowserRouter>

    </React.StrictMode>

)

//reportWebVitals();
