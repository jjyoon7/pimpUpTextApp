import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header className="header main-grid">
            <nav className="nav">
                <h1 className="header-title col">
                    <Link to="/">Pimp Up your Text</Link>
                </h1>
            </nav>
        </header>
    )
}