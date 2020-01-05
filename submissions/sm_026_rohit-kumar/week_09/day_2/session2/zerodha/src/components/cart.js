import React from 'react'

const Cart = (props) => {
    if(props.attrib.orient == 'left') {
        return(
            <>
                <div className='col-4 offset-1 mt-5'>
                    <img style={props.style} src={`${props.attrib.src}`}/>
                </div>
                <div className='col-3 offset-2'>
                    <h1 className='my-5'>{props.attrib.heading}</h1>
                    <p>{props.attrib.para}</p>
                </div>
            </>
        )
    }
    else {
        return(
            <>
                <div className='col-3 offset-1 mt-5'>
                    <h1 className='my-5'>{props.attrib.heading}</h1>
                    <p>{props.attrib.para}</p>
                </div>
                <div className='col-4 offset-2'>
                    <img style={props.style} src={`${props.attrib.src}`}/>
                </div>
            </>
        )
    }


    
}

export default Cart