import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { connect } from 'react-redux'
import { signUpUser} from '../../redux/action'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name: "",
             email: "",
             password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    reset = () => {
      this.setState({
        name: "",
        email: "",
        password: ""
      })
    }

    submit = (e) => {
        e.preventDefault()
        let obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        this.props.signUpUser('http://127.0.0.1:5000/auth/signup', obj)
       this.reset()
    }
    
    render() {
        return (
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6" className = "m-auto p-5">
                  <MDBCard>
                    <MDBCardBody>
                      <form>
                        <p className="h4 text-center py-4">Sign up</p>
                        <div className="grey-text">
                          <MDBInput
                            onChange = {this.handleChange}
                            label="Your name"
                            icon="user"
                            name = "name"
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            value = {this.state.name}
                          />
                          <MDBInput
                            onChange = {this.handleChange}
                            label="Your email"
                            icon="envelope"
                            name = "email"
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            value = {this.state.email}
                          />
                          <MDBInput
                            onChange = {this.handleChange}
                            label="Your password"
                            icon="lock"
                            name = "password"
                            type="password"
                            value = {this.state.password}
                            validate
                          />
                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="cyan" onClick = {this.submit} type="submit">
                            Register
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    signUpUser: (payload, obj) => dispatch(signUpUser(payload, obj))
})


export default connect(null,mapDispatchToProps)(SignUp)
