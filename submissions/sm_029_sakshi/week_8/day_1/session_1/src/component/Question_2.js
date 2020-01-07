import React from 'react'

function Question_2() {
    return (
        <div>
             <table>
                <tr>
                    <td>
                        <button className='  bg-primary badge badge-pill bg-info'>JOIN US</button>
                    </td>
                    <td>
                        <button className='badge badge-pill bg-light'>SETTINGS</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='badge badge-pill pr-2 pl-2  bg-danger'>LOGIN</button>
                    </td>
                    <td>
                        <button className='badge badge-pill bg-info'>CONTACT US</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='badge badge-pill bg-success'>SEARCH</button>
                    </td>
                    <td>
                        <button className='badge badge-pill pr-4 pl-4 bg-warnibg'>HELP</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='badge badge-pill pr-3 pl-3 bg-secondary'>HOME</button>
                    </td>
                    <td>
                        <button className='badge badge-pill bg-info'>DOWNLOAD</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Question_2
