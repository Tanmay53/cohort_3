import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {
            data : [],
            message:'',
            image:null,
            imgUrl:'img/profile1.png'
        }
    }

    componentDidMount(){
        let AUTH_TOKEN = localStorage.getItem('currentUserToken')
        const instance = axios.create({
            baseURL:'http://127.0.0.1:5000'
        })
        instance.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
        instance.get('auth/details')
            .then(res => this.setState({
                data:res.data.data[0],
                message:res.data.message
            }))
    }

    handleImageChange = e =>{
        this.setState({
            image:e.target.files[0]
        })
    }

    // ========================================================

    handleSubmit = () =>{
        // e.preventDefault()
        console.log('coming in submit')
        let form_data = new FormData();
        form_data.append('picture',this.state.image,this.state.image.name)

        let AUTH_TOKEN = localStorage.getItem('currentUserToken')
        const instance = axios.create({
            baseURL:' http://127.0.0.1:5000'
        })
        instance.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
        instance.post('uploader',form_data,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then(res => this.setState({
            imgUrl:res.data.path
        }))
        .catch(err => console.log(err))
    
    }

    render(){
            // console.log(this.state.imgUrl)
            return (
                <div className='container mt-5 w-50 mx-auto row'>
                    <div className='col-md-6 col-12 text-center'>
                        <div>
                            Profile Picture
                            <img src={this.state.imgUrl} className='img-fluid' alt='profile'></img>
                            <input type='file' id='image' accept='image/png, image/jpeg' onChange={this.handleImageChange} />
                            <button className='btn btn-sm btn-info m-2' onClick={() => this.handleSubmit()}>Submit</button>
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <h3>User Id: {this.state.data.id}</h3>
                        <p>Name: {this.state.data.name}</p>
                        <p>Email: {this.state.data.email}</p>
                        <br />
                        <Link to='/success'>success</Link>
                    </div>  
                </div>
            )
    }
}
