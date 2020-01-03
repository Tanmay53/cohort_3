import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            input : '',
            category:'username',
            language:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
        this.props.onInputChange()
    }

    handleClick = () =>{
       this.props.onBtnClick(this.state.category,this.state.input,this.state.language)    
    }

    render() {
            return (
                <div className='bg-dark'>
                   
                        <div className='container p-1'>
                            <h1 className='text-white'>GitHub</h1> 
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Search By:</span>
                                    <select name='category' value={this.state.category} onChange={this.handleChange}>
                                        <option value='username'>Username</option>
                                        <option value='repos'>Repository</option>
                                    </select>
                                </div>
                                <input type="text" name='input' value={this.state.value} onChange={(e)=>this.handleChange(e)} className="form-control" aria-label="Username" aria-describedby="basic-addon1" placeholder={(this.state.category === 'repos')?'Enter repository':'Enter username'} />
                               {this.state.category==='repos' && <input type="text" name='language' value={this.state.language} onChange={(e)=>this.handleChange(e)} className="form-control" aria-label="Username" placeholder='enter language' aria-describedby="basic-addon1" required/>}
                                <button className='btn btn-primary' onClick={()=>this.handleClick()}>Submit</button>
                            </div>
                        </div>
                </div>
            )
        }
}
