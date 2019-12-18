import React from 'react'
// import Form from './Form'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DB: [{ "username": "piy", password: "jain" }, { username: "piyu", password: "jain" }, { username: "piyus", password: "jain" }, { username: "piyush", password: "jain" }]
        }
        for(var i=0;i<this.state.DB.length;i++)
        {
            console.log(props)
            if(this.state.DB[i]["username"]===props.username)
            {
                console.log("asdvajdh")
            }
        }
        // console.log(this.state.DB[0]["username"])

    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}
export default Login