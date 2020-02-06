import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Details extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : "",
            email : "",
            mobile : "",
            age : ""
        }
    }
    
    componentDidMount = () =>
    {
        let id_no = this.props.match.params.id
        let baseUrl = 'http://127.0.0.1:5000/details'
        let url = baseUrl +"/"+ id_no
        axios.post(url).then
        (res =>{
            console.log(res)
            this.setState({
                name : res.data.Name,
                email : res.data.email,
                mobile: res.data.mobile,
                age : res.data.age
            })
            }  
        ).catch(error => console.log(error))
    }
    render()
    {
        return (
            <div className="m-5">
                <div className="card" style={{width:"18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">Hi {this.state.name}!</h5>
                        <h6 className="card-subtitle mb-2 text-muted">email:-{this.state.email}</h6>
                        <p className="card-text">Contact No:-{this.state.mobile}</p>
                        <p className="card-text">My Age:-{this.state.age}</p>
                        <Link to='/users/listing'><button className="btn btn-info ml-2">Go Back</button></Link>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Details

