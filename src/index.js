import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./css/style.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister();
