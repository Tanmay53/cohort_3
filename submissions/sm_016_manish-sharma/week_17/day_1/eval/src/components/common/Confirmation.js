import React from 'react'
import { connect } from "react-redux";

class Confirmation extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount=()=>{
        // setTimeout(this.props.history.push('/'),5000)
    }
    render(){
        console.log('update',this.props.update)
        return(
            <div className='text-center'>
               <div className='display-4'>Congratulations!! Your Room is Booked</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {update:state.update}
}


export default connect(mapStateToProps,null)(Confirmation)