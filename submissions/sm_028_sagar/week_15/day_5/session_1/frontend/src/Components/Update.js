import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default class Update extends React.Component {
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

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        let name = this.state.name,
            age = this.state.age,
            mobile = this.state.mobile,
            email = this.state.email,       
            id = this.state.id
        console.log('edited user ',id)
        axios.put(`http://127.0.0.1:5000/users/${id}`,{
            data:{
                id:id,
                name:name,
                age:age,
                mobile:mobile,
                email:email
            }
        })
            .then(res => console.log(res.data))
            .then(res => this.props.history.push(`/users/show/${id}?id=${id}&name=${name}&email=${email}&mobile=${mobile}&age=${age}`))
    }


    render(){
        return (
            <div className='container'>
                <Navbar />
                <h3>Update User:</h3>
                <form className='mt-2' onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' value={this.state.name}  onChange={(e)=>this.handleChange(e)} className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={this.state.email} className="form-control"  onChange={(e)=>this.handleChange(e)} id="email" placeholder="...@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="number" name='mobile' value={this.state.mobile} className="form-control"  onChange={(e)=>this.handleChange(e)} id="mobile" placeholder="enter mobile no." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <select name='age' id='age' value={this.state.age} className='ml-2 px-4 py-2' onChange={(e)=>this.handleChange(e)}>
                            <option value='10'>10</option>
                            <option value='11'>11</option>
                            <option value='12'>12</option>
                            <option value='13'>13</option>
                            <option value='14'>14</option>
                            <option value='15'>15</option>
                            <option value='16'>16</option>
                            <option value='17'>17</option>
                            <option value='18'>18</option>
                            <option value='19'>19</option>
                            <option value='20'>20</option>
                            <option value='21'>21</option>
                            <option value='22'>22</option>
                            <option value='23'>23</option>
                            <option value='24'>24</option>
                            <option value='25'>25</option>
                            <option value='26'>26</option>
                            <option value='27'>27</option>
                            <option value='28'>28</option>
                            <option value='29'>29</option>
                            <option value='30'>30</option>
                            <option value='31'>31</option>
                            <option value='32'>32</option>
                            <option value='33'>33</option>
                            <option value='34'>34</option>
                            <option value='35'>35</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
