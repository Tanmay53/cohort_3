import React from 'react'
import axios from 'axios'

class Details extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name : "",
            email : "",
            avtar : ""
        }
    }

    componentDidMount=() =>{
        let local = localStorage.getItem("token")
        console.log(JSON.parse(local))
        if(JSON.parse(local) != null){
            const token = {
                headers : {Authorization : "Bearer "+JSON.parse(local)}
            }
            axios.post('http://127.0.0.1:5000/auth/details',{},token).then
            (res =>
                this.setState({
                    name : res.data.name,
                    email : res.data.email,
    
                })
            ).catch(error => console.log(error))
        }
        
    }

    render()
    {
        return (
            <div>
                <h1 className="text-center"> Hello {this.state.name}</h1>
            </div>
        )
    }
    
}

export default Details
