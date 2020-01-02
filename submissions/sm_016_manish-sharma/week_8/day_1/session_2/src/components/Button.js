import React from 'react'

function Button(props) {
    // console.log(props.val.length)
    return (
        <div>
            <h3><div className='mx-4 btn btn-primary text-white badge badge-pill' style={{ background: props.val[1],width:'150px'}}>{props.val[0]}</div></h3>
        </div>
    )
}

export default Button