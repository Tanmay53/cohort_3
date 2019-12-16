import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value1: 'Ashish123',value2:'mypassword'};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        if(this.state.value == this.state.value1){
            alert('login successfull');

        }
        else{
            alert('inavalid entry')
        }
     
      event.preventDefault();
    }
  
    render() {
      return (
            <div>
                <h1 className='text-left'>Sign in</h1>
                <form onSubmit={this.handleSubmit} className ='myForm' >
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-12 col-form-label text-left">
                          User name or Email address:
                        </label>
                        <div class="col-sm-12">
                            <input type="text" value={this.state.value} onChange={this.handleChange} class="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-12 col-form-label text-left">
                          Password:
                        </label>
                        <div class="col-sm-12">
                            <input type="text" value2={this.state.value} onChange={this.handleChange1} class="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <input type="submit" value="Sign in" className = "bg-danger"/>
                </form>
          </div>
      );
    }
  }

  export default Form;