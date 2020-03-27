import React, { Component } from 'react';
import { connect } from 'react-redux';
import { regAdmin } from '../Redux/Actions';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: '',
			username: '',
            mobile: '',
            desc:''
		};
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		const { sendRegisterDetail } = this.props;
		sendRegisterDetail(this.state);
	};



	render() {
		return (
			<div className="container">
				<div className="row m-3 ">
					<div className="col-6 offset-3 shadow">
						<form className="needs-validation m-3">
							<h2 className="text-center">Register</h2>

							<div className="form-group">
								<label>
									Name
									<input
										type="text"
										className="form-control"
										id="name"
										placeholder="Enter Your Name"
										name="name"
										value={this.state.name}
										onChange={this.handleChange}
									/>
								</label>

								<label>
									Email
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="Enter Email ID"
										name="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</label>

								<label>
									Password
									<input
										type="password"
										className="form-control"
										id="pwds"
										placeholder="Enter password"
										name="password"
										value={this.state.password}
										onChange={this.handleChange}
									/>
                                </label>
                                
                                <label>
									Username
									<input
										type="text"
										className="form-control"
										id="usname"
										placeholder="Enter the Username"
										name="username"
										value={this.state.username}
										onChange={this.handleChange}
									/>
								</label>

								<label>
									Mobile
									<input
										type="number"
										className="form-control"
										id="mobile"
										placeholder="Enter Your Mobile number"
										name="mobile"
										value={this.state.mobile}
										onChange={this.handleChange}
									/>
                                </label>
                                
                                <label>
									Description
									<input
										type="text"
										className="form-control"
										id="desc"
										placeholder="Brief Description"
										name="desc"
										value={this.state.desc}
										onChange={this.handleChange}
									/>
								</label>

								<div>
									<button className="btn btn-success" onClick={this.handleSubmit}>
										Sign Up
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	sendRegisterDetail: (payload) => dispatch(regAdmin(payload))
});

export default connect(null, mapDispatchToProps)(Register);
