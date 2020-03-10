import React from 'react'
import axios from 'axios'
import uuid from 'react-uuid'

class DirList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dir_list: [],
            parent_id: null,
            name: '',
            bread_crumb: [{'name': './', 'link': this.props.baseURL}]
        }
    }

    componentDidMount = () => {
        axios.get(this.props.baseURL)
        .then(res=> {
            console.log(res)
            this.setState({
                dir_list: res['data']['data']
            })
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    handleClick = (uuid, name) => {
        console.log(uuid, name)
        this.setState({
            parent_id: uuid,
        })
        const url = `http://localhost:5000/dir/list/${uuid}`
        axios.get(url)
        .then(res=> {
            console.log(res)
            this.setState({
                dir_list: res['data']['data'],
                bread_crumb: [...this.state.bread_crumb, {'name': name + '/', 'link': url}]
            })
        })
        console.log(this.state.bread_crumb)
    }

    handleCreateDir = () => {
        const data = {
            name: this.state.name,
            dir_id: uuid(),
            parent_id: this.state.parent_id
        }

        const dirExists = this.state.dir_list.find((item) => {
            return item.name === this.state.name
        })
        if (dirExists !== undefined)
            return  

        axios.post('http://localhost:5000/dir/create', data).then(res => {
            console.log(res)
            this.setState({
                dir_list: [...this.state.dir_list, {id:-1, ...data}]
            })
            console.log(this.state)
        })
    }
    breadCrumbClick = (url, index) => {
        console.log(url)
        this.setState({
            parent_id: uuid,
        })
        // const url = `http://localhost:5000/dir/list/${uuid}`
        axios.get(url)
        .then(res=> {
            console.log(res)
            this.setState({
                dir_list: res['data']['data'],
                bread_crumb: this.state.bread_crumb.slice(0, index+1)
            })
        })
    }
    render() {
        return (
            <div className='row'>
                <div className='col-12 pl-5'>
                    {this.state.bread_crumb.map((item, index) => {
                        return <a onClick={() => this.breadCrumbClick(item.link, index)} href='#'>{item.name}</a>
                    })}
                </div>
                <div className='col-12'>
                    <ul className="list-group">
                        {this.state.dir_list.map((item) => {
                            return <li className="list-group-item">
                                        <img style={{"height":"30px", "width":"40px"}} src='/images/folder.png' />
                                        {/* <b className='ml-3'>{item}</b> */}
                                        <a onClick={() => this.handleClick(item.dir_id, item.name)} className='ml-3' href='#'>{item.name}</a>
                                   </li>
                        })}
                        
                    </ul>
                </div>
                <div className='col-4 mt-2'>
                    <input name='name' onChange={this.handleChange} value={this.state.name} type='text' placeholder='Enter Directory Name Here.' className='form-control'></input>
                </div>
                <div className='col-3 mt-2'>
                    <button onClick={this.handleCreateDir} className='btn btn-primary'>Add Directory</button>
                </div>
            </div>
        )
    }
}

export default DirList