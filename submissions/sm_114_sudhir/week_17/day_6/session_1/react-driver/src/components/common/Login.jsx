import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/action'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        email: this.state.email,
        password: this.state.password
      }
      this.props.loginUser('http://127.0.0.1:5000/auth/signin', obj)
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
                        <p className="h4 text-center py-4">Login</p>
                        <div className="grey-text">
                          <MDBInput
                            onChange = {this.handleChange}
                            name = "email"
                            label="Your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                            value = {this.state.email}
                          />
                          <MDBInput
                            onChange = {this.handleChange}
                            name = "password"
                            label="Your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                            value = {this.state.password}
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
  loginUser: (payload, obj) => dispatch(loginUser(payload, obj))
})


export default connect(null, mapDispatchToProps)(Login)