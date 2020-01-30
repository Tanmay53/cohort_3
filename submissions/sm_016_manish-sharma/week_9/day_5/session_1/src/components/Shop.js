import React from 'react'
import {Link} from 'react-router-dom'

export default class Shop extends React.Component{
    render(){
        return(
            <div className='m-5'>
                <div className='container-fluid text-center'>
                    <div className='col display-1'>
                        <Link to='/fruits'>FRUITS</Link>
                    </div>
                    <div className='display-1'>
                        <Link to='/vegetables'>VEGETABLES</Link>
                    </div>
                </div>
            </div>
        )
    }
}