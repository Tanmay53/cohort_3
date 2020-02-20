import React from 'react'
import {connect} from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
class Orders extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            cart_value : ""
        }
    }
    componentDidMount=()=>{
       let data = this.props.order
       let sum = 0
       data.forEach(ele => {
           sum += ele.Price
       })
       this.setState({
           cart_value : sum
       })
    }

    render(){
        return (
            this.props.form ? (
                <div>
                    <div className="bgCart">
                        <h3 className="m-auto text-center">Cart Value :- Rs.{this.state.cart_value}</h3>
                    </div>
                    <div className="d-flex mt-2 justify-content-center">
                        <Link to={`${this.props.match.url}/confirm?cart_value=${this.state.cart_value}&date=${Date.now()}`} >
                            <button className="btn btn-success">Confirm Booking</button>
                        </Link>
                    </div>
                    <div className = "mt-3 row">
                        {this.props.order.map((ele) =>
                            <div className="card mt-2 col-lg-3 col-md-6 m-5" style={{width: "18rem"}}>
                                <img className="card-img-top" src={ele.image} alt="placeholder image" />
                                <div className="card-body">
                                    <h3 className="card-title">{ele.Meeting_Room_Name}</h3>
                                    <h5 className="card-title">Floor No. :- {ele.Floor_No}</h5>
                                    <h5 className="card-text">Capacity :- {ele.Capacity}</h5>
                                    <h5 className="card-text">Price per Day :- {ele.Price}</h5>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ):(<Redirect to="/login" />)
        )
    }
    
}

const mapStateToProps = (state) => ({
    order : state.order,
    form : state.form
})

export default connect(mapStateToProps) (Orders)
