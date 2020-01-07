import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className="container mt-5 border border-dark ">

                <form>
                    <h1>Sign In</h1>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username or Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="form-group">
                        <div className="d-flex justify-content-between">
                            <label for="exampleInputPassword1">Password</label>
                            <a href="#">Forget Password?</a>
                        </div>

                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>


            </div>

        );
    }
}

export default Form;