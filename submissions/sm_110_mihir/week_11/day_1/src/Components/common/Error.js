import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
    return (
        <div>
            <h1 className="bg-primary text-white p-2">
                404! Oops, page does not exist
            </h1>
            <Link to="/">
                <button className="btn btn-primary p-2 m-2">
                    Go to Home Page
                </button>
            </Link>
        </div>
    );
}
