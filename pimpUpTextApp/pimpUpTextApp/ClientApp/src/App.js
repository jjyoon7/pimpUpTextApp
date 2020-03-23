import React from 'react'
import { Route } from 'react-router-dom'
import Header from "./pages/Header"
import Main from "./pages/Main"


export default function App() {
    return (
        <div className="root-grid">
            <Header/>
            <Route exact path="/">
              <Main/>
            </Route>
            {/* <Route path='/' component={Main}/> */}
        </div>
    )
}

