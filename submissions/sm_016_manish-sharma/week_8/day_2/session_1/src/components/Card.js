import React from 'react'

function Card(props) {
    return (
        <div className='col-4 border'>
            <div className='card border border-white'>
                <div className='row mt-4'>
                    <div className='col-3'>
                        <img style={{ width: '100%', height: '150px', objectFit: 'cover' }} src='/junk.jpg' alt={props.obj.name}></img>
                    </div>

                    <div className='col-6'>
                        <h2 className='text-danger'>{props.obj.name}</h2>
                        <div>{props.obj.contents}</div>
                        <div className='text-muted'>{props.obj.cost}</div>
                        <div className='text-muted'>Min ₹50 . Up to 30 min</div>
                        <div>{props.obj.payment}</div>
                    </div>
                    <div className='col-3 text-right'>
                        <h5><span className='bg-success text-white font-weight-bold rounded'>{props.obj.ratings}</span></h5>
                        <div><small className='text-muted'>{props.obj.votes}</small></div>
                        <div><small className='text-muted'>{props.obj.reviews}</small></div>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-8 border'> </div>
                    <div className='col-4 text-success border' style={{ background: '#E7F6EC' }}>Order Online ></div>
                </div>
            </div>
        </div>
    )
}

export default Card