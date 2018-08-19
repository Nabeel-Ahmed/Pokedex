import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Redirect,  withRouter } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Routes  = () =>  (
    <Router>
        <Route path="/" component={App} />
    </Router>
);

ReactDOM.render(
    <Routes />, 
    document.getElementById('root'));
registerServiceWorker();
