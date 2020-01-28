import React from 'react'


function Hello(props) {
    return(
        <div>
            {/* {props.person.map((ele) => {
                return (
                    <li>Hello I am {ele.name} and I'm {ele.age} years, my id is {ele.id}</li>
                )
            })} */}
<h1>{props.name}</h1>
        </div>
    )
}  

export default Hello