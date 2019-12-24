import React from 'react'

const Mobiles = (props) => {
    return (
        <div>
            <h2>{props.osObj.heading}</h2>
            <ul>
                {props.osObj.name.map((e)=>
                    <li>{e}</li>)}
            </ul>
            <h2>{props.mobManufacturers.heading}</h2>
            <ul>
                {props.mobManufacturers.name.map((e)=>
                    <li>{e}</li>)}
            </ul>
        </div>
    )
  }

  export default Mobiles;