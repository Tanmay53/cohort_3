import React from 'react'
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div className="conatiner">
            <div className="row mt-4">
                <div className="col-12 pt-4 text-center">
                    <h1>404: Page Not Found</h1>
                </div>
                <div className="col-12 pt-4 text-center">
                    <Link to="/dash">
                        <h3>Go to Dashboard</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NoMatch
