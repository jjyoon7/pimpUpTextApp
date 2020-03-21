import React from 'react';
import { Route } from 'react-router';
import { FetchData } from './components/FetchData';

export default function App() {
    return (
        <Route path='/' component={FetchData} />
    )
}

