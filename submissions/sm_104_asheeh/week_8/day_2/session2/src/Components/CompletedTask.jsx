import React from 'react'

function CompletedTask(props) {
    return (
        <>
            <ul className="text-center" style={{listStyle: "none"}}>
                {
                    props.completed.map(ele => {
                        return <li key={ele} className="py-2 px-3 bg-light border">{ele}<a href="##" className="badge badge-success float-left">Done</a> </li>
                    })

                }
            </ul>
        </>
    )
}

export default CompletedTask
