import React from 'react'
import {connect} from 'react-redux'
import { total } from "../redux/actions"

class Total extends React.Component{
    constructor(props){
        super(props)
    }
    // componentDidUpdate=()=>{
    //     this.props.total()
    // }
    render(){
        // this.props.total()
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
const mapDispatchToProps = dispatch=>{
    return {
        total:()=>dispatch(total())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Total)