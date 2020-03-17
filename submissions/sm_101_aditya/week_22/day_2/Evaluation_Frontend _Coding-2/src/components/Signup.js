import React, { Component } from 'react'

export class Signup extends Component {
    constructor(props){
        super(props)
        this.state ={
            // user = (name, email, password, username, mobile) => {
            //     this.name = name;
            //     this.email = email;
            //     this.password = password;
            //     this.username = username;
            //     this.mobile = mobile;
            //   }
        }
    }
    render() {

        // functions
        
//   function signup() {
//     event.preventDefault();
//     var name = $("#name").val()
//     var email = $("#email").val()
//     var username = $("#username").val()
//     var password = $("#password").val()
//     var mobile = $("#mobile").val()
//     var description = $("#description").val()
//     var newUser = new user(name, email, password, username, mobile);
//     var data = JSON.stringify(newUser);
//     if (
//       newUser.name !== "" ||
//       newUser.email !== "" ||
//       newUser.username !== "" ||
//       newUser.password !== "" ||
//       newUser.mobile !== "" ||
//     ) {
//       var xhr = new XMLHttpRequest();
//       xhr.open("POST", "http://localhost:8080/auth/register");
//       xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
//       xhr.send(data);
//       xhr.onload = function() {
          
//         if ((xhr.status = 200)) {
//             alert("Registration Successful")
//           console.log(xhr.status);
//           console.log(xhr.response)
//           window.location.href = "login.html"
//         } else {
//           xhr.response;
//           alert("failed")
//           console.log(xhr.response)
//         }
//       };
//     } else {
//       alert("Please fill all the fields");
//     }
//   }

        return (
            <div>
                <form>
                    <div className="container border border-success">
                        <div className="row m-3">
                            <div className="col">
                                <input type="text" id="name" className="form-control" placeholder="Full name" />
                            </div>
                            <div className="col">
                                <input type="email" id="email" className="form-control" placeholder="email" />
                            </div>
                        </div>
                        <div className="row m-2 p-2">
                            <div className="col">
                                <input type="password" id="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="col">
                                <input type="text" id="username" className="form-control" placeholder="username" />
                            </div>
                        </div>
                        <div className="row m-2 p-2">
                            <div className="col">
                                <input type="number" id="mobile" className="form-control" placeholder="mobile" />
                            </div>
                            <div className="col">
                                {/* <input type="text" id="description" className="form-control" placeholder="description" /> */}
                            </div>
                        </div>
                        <div className="m-5">
                            <button type="button" className="btn btn-primary" onclick="signup()">Submit</button>
                            
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default Signup
