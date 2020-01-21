import React from 'react'
import { connect } from 'react-redux'
import { order, cartupdate } from "../Common/actions"

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maindata: []
        }

    }
    componentDidMount = () => {
        let data = this.props.value
        let count = data.reduce(function (alldata, b) {
            if (b.id in alldata) {
                alldata[b.id]++
            }
            else {
                alldata[b.id] = 1
            }
            return alldata
        }, {})
        let fill = data.filter((ele, index) => data.indexOf(ele) == index)



        let newData = fill.map((ele) => count[ele.id] != undefined ? { ...ele, quantity: count[ele.id] } : ele)
        this.setState({
            maindata: newData
        })
    }
    minues = (id) => {
        var temp2 = this.state.maindata.map((ele) => ele.id == id ? { ...ele, quantity: ele.quantity - 1 } : ele)
        console.log(temp2)
        this.setState({
            maindata: temp2.filter((ele) => ele.quantity !== 0)
        })
        let cheking = this.state.maindata.filter((ele) => ele.quantity > 1)
        this.props.cartupdate(cheking)
    }
    plus = (id) => {
        let temp = this.state.maindata
        var temp2 = temp.map((ele) => ele.id == id ? { ...ele, quantity: ele.quantity + 1 } : ele)
        console.log(temp2)
        this.setState({
            maindata: temp2
        })
        this.props.cartupdate(this.state.maindata)

    }
    render() {
        return (
            <div className="container">
                <div className="row"></div>
                {this.state.maindata.map((ele) => <div key={ele.id} className="row"><div className="col-3"><img className="img-fluid" style={{ height: "80px" }} src={ele.imageurl}></img></div><div className="col-3 p-4 text-center">{ele.Name}</div><div className="col-3">
                    <div className="row p-3 text-center">
                        <div className="col-2 ">
                            <button className="btn btn-outline-primary" onClick={() => this.minues(ele.id)}>-</button></div>
                        <div className="col-6">{ele.quantity}</div>
                        <div className="col-3"><button className="btn btn-outline-primary" onClick={() => this.plus(ele.id)}>+</button></div>
                    </div>
                </div><div className="col-3 p-4 text-center">{`${ele.Cost * ele.quantity}`}</div>
                </div>)}
                <div className="col-12 text-center"><button className="btn btn-success m-5" onClick={() => this.props.order(this.state.maindata)}>Confirm</button></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.addReducer.cartData
})
const mapsDispatchToProps = dispatch => {
    console.log("dia")
    return ({
        order: (data) => dispatch(order(data)),
        cartupdate: (data) => dispatch(cartupdate(data))
    })
}


export default connect(mapStateToProps, mapsDispatchToProps)(Cart)
