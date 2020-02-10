import React from 'react';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (

      <div>
        {/* <div className="container">
          <form>
            <div class="form-row">
                <div class="col-7">
                  <input type="text" class="form-control" placeholder=""/>
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder=""/>
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder=""/>
                </div>
            </div>
          </form>
        </div> */}
        
      </div>
            );
            
            }
          }
  export default Form;