import React from 'react'
import axios from 'axios'

export default class CreateUse extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            age : '10',
            mobile : ''
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()  

        let newUser = {
            name : this.state.name,
            age : this.state.age,
            mobile : this.state.mobile,
            email : this.state.email
        }

        //adding user
        axios.post('http://127.0.0.1:5000/users',newUser)
            .then(res => console.log(res))
            .then(res => this.props.history.push('/users/listing'))
    }


    render(){
        return (
            <div className='container'>
                <h3>User Form:</h3>
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
