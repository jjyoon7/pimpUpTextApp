import React from 'react';
import { Route } from 'react-router';
import { FetchData } from './components/FetchData';

import './custom.css'

export default function App() {
    return (
        <Route exact path='/' component={FetchData} />
    );
  
}
