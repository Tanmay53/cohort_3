import React from 'react'
import { connect } from 'react-redux'
import { filltering, display, distance } from "../Reducers/actions"
import { Link } from "react-router-dom"

class Bookings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            source: ["Indiranagar", "Koramangala", "Rajajinagar", "Malleswaram", "Yeshwathpur", "Jayanagar", "Hebbala"],
            destination: ["Indiranagar", "Koramangala", "Rajajinagar", "Malleswaram", "Yeshwathpur", "Jayanagar", "Hebbala"],
            from: "",
            findex: "",
            to: "",
            tindex: "",
            isclear: false,
            dis: ""

        }
    }
    componentDidMount() {
        this.props.display()
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleSubmit = () => {
        this.setState({
            dis: Math.abs(this.state.source.indexOf(this.state.from) - this.state.destination.indexOf(this.state.to))
        })
        if (this.state.to == "") {
            alert("please select destination")
        }
        else {
            this.setState({
                isclear: true
            })
        }
    }
    fill = () => {
        this.props.fromstart(this.state.from)
    }
    adddistance = (id) => {
        console.log("hhhhh")
        this.props.adddis(id, this.state.dis, this.state.to)
    }

    render() {
        return (
            <>
                <div className="container ">
                    <div className="row">
                        <div className="col-5">
                            <label>From</label>
                            <select className="form-control shadow m-2" value={this.state.from} name="from" onClick={this.fill} onChange={this.handleChange}>
                                <option selected></option>
                                {this.state.source.map((ele, index) => <option key={index} value={ele} value2={index}>{ele}</option>)}
                            </select>
                        </div>
                        <div className="col-5">
                            <label>To</label>
                            <select value={this.state.to} name="to" className="form-control shadow m-2 " onChange={this.handleChange}>
                                <option selected></option>
                                {this.state.destination.map((ele, index) => <option key={index} value={ele}>{ele}</option>)}
                            </select>
                        </div>
                        <div className="col-1 pt-4 mt-2">

                            <button className="btn btn-success" onClick={this.handleSubmit}>Go</button>
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row">
                        {this.props.data.map((ele) => <div className="col-lg-4 col-md-6 col-xl-4 col-sm-12">
                            <div className="border m-2 shadow p-3 mb-5 bg-white rounded">
                                <div style={{ height: "250px" }}><img className="img-fluid" src={ele.img} /></div>
                                <div><h1>{ele.Model}</h1></div>
                                <div><h3>{ele.Name}</h3></div>
                                <div><p>{ele.location}</p></div>
                                {this.state.isclear &&
                                    <div><Link to={`${this.props.match.url}/${ele.id}`}><button className="btn btn-primary" onClick={() => this.adddistance(ele.id)}>Start Ride</button></Link></div>}
                            </div>
                        </div>)}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.bookingReducer.displaydata
})

const mapDispatchToProps = (dispatch) => {
    return ({
        fromstart: (value) => dispatch(filltering(value)),
        display: () => dispatch(display()),
        adddis: (id, dis, to) => dispatch(distance(id, dis, to))

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookings)