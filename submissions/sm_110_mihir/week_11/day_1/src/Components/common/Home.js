import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <h1 className="bg-primary text-white">Home Page</h1>
            <Link to="/admin">Goto DASHBOARD</Link>
        </div>
    );
}
