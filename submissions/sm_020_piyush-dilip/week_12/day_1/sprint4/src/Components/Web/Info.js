import React from 'react'

const Info = props => {
    return(
        <div className='text-muted'>
            {props.data.map(e => <p key={e[0]}>{e}</p>)}
        </div>
    )
}

export default Info