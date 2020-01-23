import React from 'react';
import {fetchData} from './Redux/Action'
import {connect} from 'react-redux'

class Github extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            name: "",
            email: "",
            password: "",
            username: "",
            mobile: "",
            description: "",
            fill : false
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleClick=(e)=>{
        e.preventDefault()
        let obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            mobile: this.state.mobile,
            description: this.state.description 
        }
        console.log(obj)
        let count = 0,key
        for(key in obj)
        {
            if(obj[key] != "")
                count=count+1
        }
        console.log(count)
        if (count == 6) {
            this.props.fetchData(obj)
        }
        else
        {
            alert("fill the form properly")
        }
        
        
    }

    render(){
        console.log("props are", this.props)
        return(
            <React.Fragment>
                <div className="bgLogin">
                    <h3 className="text-center mt-1">SignUp Form</h3>
                    <div className="mx-3">
                        <label className="ml-1 mt-3">Name</label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="name" placeholder="Enter name" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Email</label>
                        <input className="form-control" onChange={this.handleChange} type="email" name="email" placeholder="Enter email id" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Password</label>
                        <input className="form-control" onChange={this.handleChange} type="password" name="password" placeholder="Enter password" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Username</label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="username" placeholder="Enter username" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Mobile</label>
                        <input className="form-control" onChange={this.handleChange} type="number" name="mobile" placeholder="Enter Mobile no." />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Description</label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="description" placeholder="Enter description" />
                    </div>
                    <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Add</button>
                </div>
                <br></br>  
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.signup.isLoading,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        fetchData: a => dispatch(fetchData(a))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Github);
  