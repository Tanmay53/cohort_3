import React from 'react'
import { connect } from 'react-redux'

export class Order extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                {this.props.value.map((ele) => <div className="row"><div className="col-3"><img className="img-fluid" style={{ height: "80px" }} src={ele.imageurl}></img></div><div className="col-3 p-2">{ele.Name}</div><div className="col-3 p-2">{ele.Cost}</div></div>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.addReducer.ordersData

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
