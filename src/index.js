import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { App } from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from './fbConfig'

auth.onAuthStateChanged(() =>

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    )
)
