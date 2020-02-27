import React from 'react'
import {Link} from 'react-router-dom'


export default function BlogPost(props) {
    return (
        <div className='col-md-4 col-xs-12'>
            <div className='card m-3'>
                <div className='card-header'>   
                    <h5><b>{'#' + props.blog.blog_id + ' ' + props.blog.heading}</b></h5>
                </div>
                <div className='card-body' style={{"height": "100px"}}>
                    <p className=''>
                        {props.blog.body.slice(0, 60)}
                    </p>

                    
                </div>
                <Link to={`/blog/view/${props.blog.blog_id}`} className='btn btn-primary from-control btn-sm m-2'>Read Full Article ...</Link>        
            </div>
            
        </div>
    )
}