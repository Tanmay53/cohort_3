import React, { Component } from 'react';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemName: ''
        }
    }

    render() {
        return (
            <div>
                <div className='d-flex'>
                    <input type='text'
                            display='flex'
                            className='form-control col-5'
                            value={this.state.itemName}
                            placeholder='Add a to-do..'
                            onChange={ (e)=>this.setState({
                                itemName: e.target.value
                            })} />
                    <button className='btn btn-primary' onClick={ ()=> this.props.add(this.state.itemName)}>Add Todo</button>
                </div>
            </div>
        )
    }
}


export default Add;