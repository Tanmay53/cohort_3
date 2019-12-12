import React from 'react'
import ReactDOM from 'react-dom'
import './myController.css'

const MyController = () => {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <button className='badge badge-pill blueviolet'>JOIN US</button>
                    </td>
                    <td>
                        <button className='badge badge-pill brown'>SETTINGS</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='badge badge-pill red'>LOGIN</button>
                    </td>
                    <td>
                        <button className='badge badge-pill blue'>CONTACT US</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='badge badge-pill green'>SEARCH</button>
                    </td>
                    <td>
                        <button className='badge badge-pill yellow'>HELP</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='badge badge-pill orange'>HOME</button>
                    </td>
                    <td>
                        <button className='badge badge-pill cyan'>DOWNLOAD</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default MyController