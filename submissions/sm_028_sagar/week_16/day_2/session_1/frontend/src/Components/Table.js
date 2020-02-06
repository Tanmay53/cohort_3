import React from 'react'
import axios from 'axios'
import Pagination from './Pagination'

export default class Table extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tableData : [],
            perPage:5,
            page:1,
            dbitemSize:1,
            dataReceived:false
        }
    }

    componentDidMount = () =>{
        const query = new URLSearchParams(this.props.location.search)
    
        console.log('component did mount')
        let perPage = query.get('per_page') == null ? 5 : query.get('per_page'),
            page = query.get('page') 

        console.log('query found in cdm perPage ',perPage,'page ',page)
        axios.get(`http://127.0.0.1:5000/users?per_page=${perPage}&page=${page}`)
        .then(res => res = res.data)
        .then(res => this.setState({
            tableData : res.arr[0],
            dbitemSize: Number(res.arr[1]),
            perPage : perPage,
            page : page,
            dataReceived : true
        }))

        // this.setState({
        //     perPage : perPage,
        //     page : page
        // })
    }

    handleNavigate = item =>{
        this.props.history.push(`/users/show/${item.id}?id=${item.id}&name=${item.name}&email=${item.email}&mobile=${item.mobile}&age=${item.age}`)
    }

    handleDelete = item =>{
        this.props.history.push(`/users/delete/${item.id}?id=${item.id}&name=${item.name}&email=${item.email}&mobile=${item.mobile}&age=${item.age}`)
    }

    handlePerPage = perPageResponse =>{
        
        this.setState({
            perPage : perPageResponse
        })
        
        this.props.history.push(`/users/listing?per_page=${perPageResponse}`)

        axios.get(`http://127.0.0.1:5000/users?per_page=${perPageResponse}`)
        .then(res => res = res.data)
        .then(res => this.setState({
            tableData : res.arr[0],
            dbitemSize: Number(res.arr[1])
        }))
    }

    handleBtnCall = value => {
        // console.log('btn selected',value)
        this.setState({
            page : value
        })
        let per_Page = this.state.perPage
        console.log(per_Page)

        this.props.history.push(`/users/listing?per_page=${per_Page}&page=${value}`)

        axios.get(`http://127.0.0.1:5000/users?per_page=${per_Page}&page=${value}`)
        .then(res => res = res.data)
        .then(res => this.setState({
            tableData : res.arr[0],
            dbitemSize: Number(res.arr[1])
        }))
    }
    
    render(){
        return (
            <div className='container'>
                {this.state.dataReceived && <Pagination currentPerPage={this.state.perPage} resPerPage={this.state.dbitemSize} currPage={(value)=>this.handleBtnCall(value)}  resSelected={(value)=>this.handlePerPage(value)}/>}
                <table className="table text-center">
                <thead>
                    <tr>
                        <th className='text-left' scope="col">Name</th>
                        <th className='text-left' scope="col">Email</th>
                        <th className='text-left' scope="col">Mobile</th>
                        <th scope="col">Age</th>
                        <th scope="col">Info</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map(item => 
                            <tr key={item.id}>
                                <td className='text-left'>{item.name}</td>
                                <td className='text-left'>{item.email}</td>
                                <td className='text-left'>{item.mobile}</td>
                                <td>{item.age}</td>
                                <td>
                                    <button className='btn btn-sm btn-info' onClick={()=>this.handleNavigate(item)}>Details</button>
                                </td>
                                <td>
                                    <button className='btn btn-sm btn-danger' onClick={()=>this.handleDelete(item)}>Delete</button>
                                </td>
                            </tr>
                        )}
                </tbody>
                </table>
            </div>
        )
    }
    
}
