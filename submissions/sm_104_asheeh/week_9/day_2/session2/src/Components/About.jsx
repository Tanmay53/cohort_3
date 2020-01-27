import React from 'react'
import {Link, Route} from 'react-router-dom'
import Details from './Details'

class About extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        //console.log(this.props.dummy)
       // console.log(this.props.match.url)
    return (
        <div>
            <h2>Tell me something about yourself.</h2>
            {
                this.props.dummy.map(ele => {
                    return (
                            <div>
                                <div key={ele.id}>
                                    {/* <p>Name:{ele.name} </p>
                                    <p>Salary:{ele.salary} </p> */}
                                    <Link to={`${this.props.match.url}/${ele.id}`}>
                                        {ele.name}
                                        </Link>
                                </div>
                    </div>
                    )

                })
            }
            
        </div>
    )}
}

export default About
