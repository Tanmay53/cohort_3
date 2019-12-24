import React from 'react'

const ImageCard = (props) => {
    return(
            <div className='card border-0 m-5' style={{height:'250px', width:'250px'}}>
                <img className='img img-fluid rounded-circle' src={`${props.attrib.src}`}/>
                <div className='card-body text-center'>
                    <h4 className='m-2'>{props.attrib.name}</h4>
                    <p className='m-2' className='text-muted'>{props.attrib.post}</p>
                    <p className='m-2'>Bio</p>

                </div>
            </div>
        )
}

export default ImageCard