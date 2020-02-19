import React from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Confirmation extends React.Component{
    constructor(props){
        super(props)
    }
    createInterval=()=>{
        this.x = setInterval(()=>{
            this.props.history.push('/')
        },5000)
    }
    componentDidMount=()=>{
            this.createInterval()
    }
    componentWillUnmount=()=>{
        clearInterval(this.x)
    }
    render(){
        // console.log('update',this.props.update)
        return(
            <div className='text-center'>
               <div className='display-4 mb-5'>Congratulations!! Your Room is Booked</div>
               <p className='my-5'>Redirecting to Dashboard in five seconds...</p>
               <div className='my-5'></div>
               <Link to='/'><div className='btn btn-success'> ⬅ Dashboard</div></Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {update:state.update}
}


export default connect(mapStateToProps,null)(Confirmation)