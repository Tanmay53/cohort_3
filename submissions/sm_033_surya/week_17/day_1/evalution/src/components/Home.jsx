import React from 'react'
import { connect } from 'react-redux'
import { getdata, fetchdata, sortit, filteringData } from '../redux/Actions'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            roomname: "",
            startdate: "",
            enddate: "",
            ascen: true,
            floors: ""
        }
    }
    componentDidMount() {
        this.props.fetchdata()
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        this.props.getdata(this.state.roomname, this.state.startdate, this.state.enddate)

    }
    sortIt = () => {
        this.setState({
            ascen: !this.state.ascen
        })
        this.props.sortit(this.state.ascen)
    }
    filtering = () => {
        this.props.filteringData(this.state.floors)
    }
    render() {
        // console.log("2020-02-13">"2020-02-15" );
        console.log(this.props.value);
        console.log(this.state);

        return (
            <div>
                <div className="container text-center p-3">
                    <input className="form-control m-4" placeholder="Search by RoomName" type="text" name="roomname" value={this.state.roomname} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.handleClick}>Search</button>
                    <div className="col-6 offset-3" >
                        <input className="form-control m-2" type="date" name="startdate" onChange={this.handleChange}
                            value={this.state.startdate} />
                        <input className="form-control m-2" type="date" name="enddate" onChange={this.handleChange}
                            value={this.state.enddate} />
                        select floor
                <div><select className=" btn btn-outline-primary form-control m-2" value={this.state.floors} name="floors" onChange={this.handleChange} onClick={this.filtering}>
                            <option>none</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select></div>
                    </div>
                    <div><button className="btn btn-danger" onClick={this.sortIt}>Sort By Price</button></div>
                </div>
                <div className="container text-center  offset-xl-3 offset-md-1 offset-sm-1">
                    <div className="row">
                        {this.props.value.map((ele) => <div className="col-3 m-3 shadow p-3 mb-5 bg-white rounded" key={ele.roomName}><div> <img src="https://via.placeholder.com/250X250" /></div><div>RoomName:{ele.roomName}</div><div>FloorNo:{ele.floorNo}</div><div>Capacity:{ele.capacity}</div><div>Price:{ele.price}/day</div><Link to={`/${ele.roomName}`}><button className="btn btn-warning">Buy</button></Link></div>)}
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.mainReducer.displayData
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getdata: (a, b, c) => dispatch(getdata(a, b, c)),
        fetchdata: () => dispatch(fetchdata()),
        sortit: (a) => dispatch(sortit(a)),
        filteringData: (a) => dispatch(filteringData(a))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
