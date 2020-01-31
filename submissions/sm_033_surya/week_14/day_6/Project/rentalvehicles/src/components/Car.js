import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTo } from "../Reducers/actions"

export class Car extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            isdatavail: false,
        }
    }
    componentDidMount() {
        console.log(this.props.match.params.id, this.props.value)
        let temp = this.props.value.find((ele) => {
            if (ele.id == this.props.match.params.id) {
                return ele
            }
        })
        console.log(temp)
        if (temp) {
            this.setState({
                data: temp
            })
        }
        else {
            this.setState = {
                isdatavail: true
            }
        }
    }
    handleSubmit = () => {
        this.props.addto(this.state.data)
    }
    render() {
        if (!this.state.isdatavail) {
            return (
                <>
                    <div className="container text-center">
                        <table className="table">
                            <tr><th></th><th>MODEL</th><th>Name</th><th>Mileage(kmph)</th><th>From</th><th>To</th><th>Distance(km)</th><th>Cost(Rs)</th><th>fuel(lt)</th></tr>
                            <tr><td><img className="img-fluid" style={{ height: "100px" }} src={this.state.data.img} /></td><td>{this.state.data.Model}</td><td>{this.state.data.Name}</td><td>{this.state.data.mielage}</td><td>{this.state.data.location}</td><td>{this.state.data.destiny}</td><td>{this.state.data.distance}</td><td>{`${this.state.data.cost * this.state.data.distance}`}</td><td>{`${this.state.data.fuel - (this.state.data.distance / this.state.data.mielage).toFixed(3)}`}</td></tr>
                        </table>
                        <div >Need to pay <h1>{`${this.state.data.cost * this.state.data.distance}`}Rs</h1></div>
                        <div><button className="float-right btn btn-primary" onClick={this.handleSubmit}>Confirm</button></div>
                    </div>
                </>
            )
        }
        else {
            return (
                <div className="col-4"><h1>No data found</h1></div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    value: state.bookingReducer.displaydata
})

const mapDispatchToProps = (dispatch) => {
    return {
        addto: (data) => (dispatch(addTo(data)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)
