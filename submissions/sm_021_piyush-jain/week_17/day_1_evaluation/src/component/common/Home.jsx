import React from 'react'
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom"
import { search } from "../../redux/action"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "display": [],
            "start": "",
            "end": ""
        }
    }
    componentDidMount = () => {
        this.setState({
            display: this.props.rooms
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        this.props.search(this.state.start, this.state.end)
    }
    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <div>
                    <div style={{"margin":"30px 0px 0px 100px","width":"400px","height":"250px","backgroundColor":"yellow"}}>
                        <div> See available rooms at your preferred time</div><br></br>
                        <div>Enter Start Date:  <input type="date" name="start" placeholder="Enter Start Date" onChange={this.handleChange} /></div><br></br>
                        <div>Enter End Date:  <input type="date" name="end" onChange={this.handleChange} placeholder="Enter End Date" /></div><br></br>
                        <Link to="/booking"><button class="btn  btn-danger" style={{ "marginLeft": "40px" }} onClick={this.handleClick}>Search</button></Link>
                    </div>
                    <table class="table" style={{ "margin": "50px 300px 0px 100px" }}>
                        <tr><th>NAME</th><th>SHOW MORE</th></tr>
                        {this.state.display.map(item => <tr>
                            <td>{item.name}</td>
                            <td><button class="btn btn-success"><Link to={`info/${item.id}`} style={{"textDecoration":"none","color":"white"}}>SHOW INFO</Link></button></td>
                        </tr>)}
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    rooms: state.rooms
})

const mapDispatchToProps = dispatch => {
    return ({
        search: (start, end) => dispatch(search(start, end))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)