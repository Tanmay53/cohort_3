import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="d-flex bg-light justify-content-between border p-3">
            <Link className="h4" to="/">Home</Link>
            <Link className="h4" to="/publish">Publish a New Book</Link>
        </div>
    )
}
