import React from 'react';
import {fetchDataSign} from './Redux/Action'
import {connect} from 'react-redux'

class Github extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            password: "",
            username: "",
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
            password: this.state.password,
            username: this.state.username,
        }
        let count = 0,key
        for(key in obj)
        {
            if(obj[key] != "")
                count=count+1
        }
        console.log(count)
        if (count == 2) {
            this.props.fetchDataSign(obj)
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
                    <h3 className="text-center mt-1">SignIn Form</h3>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Username</label>
                        <input className="form-control" onChange={this.handleChange} type="text" name="username" placeholder="Enter username" />
                    </div>
                    <div className="mx-3">
                        <label className="ml-1 mt-2">Password</label>
                        <input className="form-control" onChange={this.handleChange} type="password" name="password" placeholder="Enter password" />
                    </div>
                    
                    <button className="btn btn-primary mt-3 ml-3 mb-3" onClick={this.handleClick}>Sign In</button>
                </div>
                <br></br>  
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.signin.isLoading,
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        fetchDataSign: a => dispatch(fetchDataSign(a))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Github);
  