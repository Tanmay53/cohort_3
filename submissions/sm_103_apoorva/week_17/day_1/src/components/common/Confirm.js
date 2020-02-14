import React from 'react'
import queryString from 'query-string'
import {Redirect,Link} from 'react-router-dom'

class Confirm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            transaction_id : "",
            cart_value : "",
            redirect : true
        }
    }

    componentDidMount = () =>{
        const values = queryString.parse(this.props.location.search)
        console.log(values)
        this.setState({
            transaction_id : values.date,
            cart_value : values.cart_value
        })

        setInterval(()=> {this.setState({redirect:false})},5000)
    }

    render(){
        return (
            this.state.redirect ? (
                <div className="d-flex justify-content-center">
                <div >
                    <h1>Booking Confirmed</h1>
                    <h3>transaction_id is :-{this.state.transaction_id}</h3>
                    <h3>Paid :- {this.state.cart_value}</h3>
                </div>
            </div>
            ):(
                <Redirect to = "/" />
            )
            
        )
    }
    
}

export default Confirm
