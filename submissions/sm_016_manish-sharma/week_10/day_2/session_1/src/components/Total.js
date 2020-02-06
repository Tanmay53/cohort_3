import React from 'react'
import {connect} from 'react-redux'

class Total extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div>
                <h4>Total :</h4>
                <h3>{this.props.num}</h3>
                </div>
            </div>
        )
    }

}
const mapStateToProps = state=>{
   return {num: state.num}
}


export default connect(
    mapStateToProps
)(Total)