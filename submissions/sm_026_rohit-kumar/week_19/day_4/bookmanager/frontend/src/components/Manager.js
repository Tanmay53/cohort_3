import React from 'react'
import uuid from 'react-uuid'
import axios from 'axios'


import {connect} from 'react-redux'        

class Manager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
   

    handleClick = () => {
        if(this.state.value.length == 0) {
            return
        }
        else { 
            const url = this.props.data['create_url']
            const data = { name: this.state.value, uuid: uuid()}
            // console.log(url, data)

            axios.post(url, data)
            .then(res => {
                this.props.callBackHandleCreate(data)
            })
            console.log('state', this.state)
        }
    }

    handleEdit = (name, uuid) => {
        const new_name = prompt('Enter new value for ' + this.props.data.display_name, name)
        const url = this.props.data['edit_url']
            const data = { name: new_name, uuid: uuid}
                 
            axios.put(url, data)
            .then(res => {
                this.props.callBackHandleUpdate({name: new_name, uuid: uuid})
            })
    }

    handleDelete = (name, uuid) => {
            const url = this.props.data['delete_url']
            const data = { name: this.state.value, uuid: uuid}                 
            axios.delete(url, {'data': data})
            .then(res => {
                this.props.callBackHandleDelete(data)
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        const select_url = this.props.data['select_url']
        axios.get(select_url)
        .then(res => {
            console.log('load : ', res)
            if(res['data']['result'] == 'success')
                this.props.callBackHandleLoad(res['data']['data'])
        })
    }

    render() {
        console.log(this.props)
        return (
            <>
                <div className='row'>
                    <div className='c
                    :ol-md-3'>
                        <label>{this.props.data.display_name} Name</label>
                    </div>
                    <div className='col-md-4'>
                        <input name='value' onChange={this.handleChange} value={this.state.value} type='text' className='form-control'></input>
                    </div>
                    <div>
                        <button onClick={this.handleClick} className='btn btn-primary'>
                            <i class="fa fa-plus" style={{"fontSize":"15px"}}></i>
                            &nbsp; Add
                        </button>
                    </div>
                </div>
                <div className='row mt-3'>
                    {/* {this.state.data_store.length === 0 &&
                        <h5>No Author Available.</h5>
                    }  */}
                    
                    <div className='col-8'>
                        {this.props.store.length >= 0 && 
                            <table className='table'>
                                <thead>
                                    <th className='text-left'>S.No</th>
                                    <th className='text-left'>{this.props.data.display_name}</th>
                                    <th className='text-right'>Edit</th>
                                    <th className='text-right'>Delete</th>
                                </thead>
                                <tbody>
                                    {this.props.store.map((item, index) => {
                                        return <tr>
                                                    <td className='text-left'>{index + 1}</td>
                                                    <td className='text-left'>{item.name}</td>
                                                    <td className='text-right'>
                                                        <a onClick={() => this.handleEdit(item.name, item.uuid)} href="#">edit</a>
                                                    </td>
                                                    <td className='text-right'>
                                                        <a onClick={() => this.handleDelete(item.name, item.uuid)} href="#">delete</a>
                                                    </td>
                                               </tr>
                                    })}
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Manager