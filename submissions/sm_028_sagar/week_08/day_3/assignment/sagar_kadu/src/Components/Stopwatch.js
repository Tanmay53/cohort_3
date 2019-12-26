import React from 'react'

export default function Stopwatch(props) {
    return (
        <div className='border'>    
            <h3>Stopwatch</h3>
            <div className='d-flex m-2'><h1>{props.second}</h1><p className='pt-3'>sec </p><h1>{props.milliSec}</h1></div>
            <div>
                <button className='btn btn-primary border text-white' onClick={props.stopper}>{props.value}</button>
                <button className='btn btn-secondary border text-white' onClick={props.reset}>RESET</button>
            </div>
        </div>
    )
}
