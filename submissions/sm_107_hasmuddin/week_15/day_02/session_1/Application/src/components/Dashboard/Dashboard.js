import React from 'react'
import {Link} from "react-router-dom"

export default function Dashboard() {
    return (
        <div className="container-fluid  bg-dash">
                <h1 className="text-danger bg-light container-fluid">
                    mygroceries.com
                </h1>
              <Link to="/add" className="btn btn-danger m-5">ADD ITEMS</Link>
              <Link to="/home" className="btn btn-success m-5">GROCERY ITEMS</Link>
              <Link to="/done" className="btn btn-success m-5">PURCHASED ITEMS LIST</Link>
        </div>
    )
}
