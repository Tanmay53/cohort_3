import React from 'react'
import Display from './Display'
import Userinter from './Userinter'
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            moviedata:''
        }
    }

    FormSubmit=(moviedata)=>{
        this.setState({moviedata})
        // console.log(moviedata)
    }

    render(){
        return(
            <div>
                <Display parentFun={this.FormSubmit}/>
                <Userinter data={this.state.moviedata}/>
                
            </div>
        )
    }
}
export default Form