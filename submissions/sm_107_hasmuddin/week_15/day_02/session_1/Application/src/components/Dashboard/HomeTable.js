import React from 'react'
import {Link} from "react-router-dom"

export default function HomeTable({data, index}) {
    return (
        <tr>
            <td>
                <Link to={`/mark/${index}?item=${data.item}&quantity=${data.quantity}`} className="btn btn-outline-dark">Purchased</Link>
            </td>
            <td>
                {data.item}
            </td>
            <td>
                {data.quantity}
            </td>
            <td>
                <Link to={`/delete/${index}?item=${data.item}&quantity=${data.quantity}`} className="btn btn-danger">Delete</Link>
            </td>
            <td>
                <Link to={`/edit/${index}?item=${data.item}&quantity=${data.quantity}`} className="btn btn-info">
                    Edit
                </Link>
            </td>
        </tr>
    )
}
