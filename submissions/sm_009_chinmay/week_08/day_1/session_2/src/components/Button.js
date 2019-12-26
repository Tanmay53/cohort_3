import React from 'react'

const Button = (props) => {
        return (
                <button className='p-1 btn text-white m-2 badge-pill'
                        style={{ backgroundColor: props.color }}>
                        {props.label}
                </button>
        )
}

export default Button;