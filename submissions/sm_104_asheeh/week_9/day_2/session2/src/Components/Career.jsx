import React from 'react'
import {Link} from 'react-router-dom'

function Career() {
    return (
        <div className="border border-dark m-4">
            <Link className="m-2" to="/career/frontEnd">FrontEnd</Link>
            <Link className="m-2" to="/career/backEnd">BackEnd</Link>
            <Link className="m-2" to="/career/fullStack">FullStack</Link>

        </div>
    )
}

export default Career
