import React from 'react'
import Navbar from './Navbar'


export default class Show extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            age : 0,
            mobile : 0,
            id : 0
        }
    }

    componentDidMount = () =>{
        const query = new URLSearchParams(this.props.location.search)
        let name = query.get('name'),
            email = query.get('email'),
            age = query.get('age'),
            mobile = query.get('mobile'),
            id = query.get('id')
        
        this.setState({
            name:name,
            email:email,
            age:age,
            mobile:mobile,
            id:id
        }) 
    }

    handleNavigate = () =>{
        let id = this.state.id,
            name = this.state.name,
            email = this.state.email,
            mobile = this.state.mobile,
            age = this.state.age

        this.props.history.push(`/users/edit/${id}?id=${id}&name=${name}&email=${email}&mobile=${mobile}&age=${age}`)
    }

    render(){
        return (
            <div className='container'>
                <Navbar />
                    <table className='table mx-auto shadow mt-5 w-75'>
                        <thead ><tr><th scope='row'>User Details :</th>
                                <th></th>
                        </tr></thead>
                        <tbody>
                            <tr>
                                <th scope='row'>Name:</th>
                                <td>{this.state.name}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Email:</th>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Age:</th>
                                <td>{this.state.age}</td>
                            </tr>
                            <tr>
                                <th scope='row'>Mobile:</th>
                                <td>{this.state.mobile}</td>
                            </tr>
                            <tr>
                                <td>
                                    <button className='btn btn-primary m-1' onClick={()=>this.handleNavigate()}>Edit</button>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                        
                    </table>
            </div>
        )
    }
}
