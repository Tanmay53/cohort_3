import React, { Component } from 'react';
import axios from 'axios'
import Tabledisp from './Tabledisp';
import Moreinformstion from './Moreinformstion'


class SearchUser extends Component {
    constructor(props){
        super(props)

        this.state={
            Username:"",
            showtable:false,
            UsersearchData:[],
            ReposearchData:[],
            moreUserInfoNeeded: [],
        
        }
    }


    handleChange=(e)=>
    {
        e.preventDefault() ;
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    // ========================handlechnge on submit, API is called for username entered=================
    handleSubmit=(e)=>{
        e.preventDefault()
        
        const parconfig={
            method: 'get',
            url: 'https://api.github.com/search/users?',
            params: {
              q: this.state.Username
            }
        }

        axios(parconfig)
        .then(response => {
            console.log(response.data.items)
            this.setState(({
                UsersearchData: response.data.items,
                showtable:true

            }))
            
         })

         

        }

        handleMoreInfoClick = (input) => {
            let s = [...this.state.moreUserInfoNeeded, input]
            //console.log('more info clicked ', [...this.state.moreUserInfoNeeded, input])
            //console.log(this.state)
            this.setState({
              moreUserInfoNeeded: s
            })
            console.log(this.state.moreUserInfoNeeded)

            alert('ab dekho')
        }


    // reset the input box========================================
    handleReset=(e)=>{
        e.preventDefault()
        /* alert("Reset done")
        this.setState({
            Username:""
        }) 
        console.log(this.state.UsersearchData)
        console.log(this.moreUserInfoNeeded) */
        console.log(this.state)
    }

    render() {
        return (
            <div>
                 <form>
                    <h2 className="col-5 offset-2 mt-5">Search User on Github</h2> <br/>
                    <div className="from-group  col-3 offset-2">
                        <label>Enter the username</label>
                    <input className="bg bg-warning" name="Username" value={this.state.Username} onChange={this.handleChange} />
                    <button onClick={this.handleSubmit} className="bg-success p-1 mt-3">Submit</button>
                    <button onClick={this.handleReset} className="bg-success ml-4 p-1 mt-3">Reset</button>
                    </div>

                    {this.state.showtable  &&
                 <Tabledisp userrrdata={this.state.UsersearchData} handleMoreInfoClick={this.handleMoreInfoClick} info={this.state}/>
                     }
                  
                  </form>

                  
            </div>
        );
    }
}

export default SearchUser;