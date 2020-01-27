import React from 'react'
import Table from './Table'

class Details extends React.Component{
    constructor(props){
        super(props)
    }
    back=()=>{
        this.props.parentCallback('yes')
    }
    render(){
        return(
            <div className='text-center'>
                <div>
                    <div className='text-info h6 my-2'>Type:{this.props.obj.type}</div>
                </div>
                <div>
                <img src={this.props.obj.avatar_url} style={{height:'300px'}} />
                </div>
                <div>
                <div className='text-success h4 my-4'>Name: {this.props.obj.login}</div>
                </div>
                <div>
                <div className='text-primary h6 my-2'>Github Profile: <a href={this.props.obj.html_url}>Click Here</a> </div>
                </div>
                <div>
                <div className='text-primary h6 my-2'>ID: {this.props.obj.id}</div>
                </div>
                <br></br>
                <div className='btn btn-success' onClick={this.back}>
                    Back
                </div>

            </div>
        )
    }
}

export default Details