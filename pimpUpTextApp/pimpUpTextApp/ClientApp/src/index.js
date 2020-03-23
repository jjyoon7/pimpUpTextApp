
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {ContextProvider} from "./Context";
import App from './App';

// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <ContextProvider>
      <Router>
        <App />
      </Router>
  </ContextProvider>,
  rootElement);



