import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // alert("Username: " + this.state.username + "   Password: " + this.state.password);
    this.props.doUserValidation(this.state.username, this.state.password)
    this.reset();
  };

  reset = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  render() { 
    return (
        <div>
            <form className="mx-auto col-4 mt-4" style={{border: '1px solid grey', borderRadius: '30px', boxShadow: '1px 1px 5px grey'}}>
                <div class="form-group p-2 mt-4">
                    <label>Username</label>
                    <input name="username" value={this.state.username} onChange={this.handleChange} type="text" class="form-control" placeholder="Username"required />
                </div>
                <div class="form-group p-2">
                    <label>Password</label>
                    <input name="password" value={this.state.password} onChange={this.handleChange} type="password" className="form-control" placeholder="Password"required />
                </div>
                <button type="submit" value="submit" className="btn btn-primary mb-4 ml-2" onClick={this.handleSubmit}>Sign in</button>
            </form>
        </div>
      
    )
  }
}

       

export default Form;