import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Show extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data : [],
            table : false,
            page : '',
            page_no : '',
            pagination : ''
        }
    }

    handleChange = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        });
        axios.get('http://127.0.0.1:5000/listing',{
                params :{ 
                    dataPerPage : event.target.value,
                    page_no : this.state.page_no
                }
        }).then
        (
            res => {
                const data = res.data
                console.log(res)
                this.setState({
                    data : data[0],
                    table : true,
                    pagination : data[1]
                })
            }
        ).catch(error => console.log(error),{
            PerPage : this.state.page,
            page : this.state.page_no
        })
    }

    componentDidUpdate = (prevProps) =>{
        // console.log("prev",prevProps.location.search)
        // console.log("current",this.props.location.search)
        if(this.props.location.search != prevProps.location.search)
        {
            this.click()
        }
    }

    click = () => {
        let arr = this.props.location.search.split("=")
        let dataPerPageSplit = arr[1].split("&") 
        let pageNo = Number(arr[2])
        let dataPerPage = Number(dataPerPageSplit[0])
        console.log(pageNo,dataPerPage)
        this.setState({
            page: dataPerPage
        })
        axios.get('http://127.0.0.1:5000/listing',{
            params :{ dataPerPage : dataPerPage,
            page_no : pageNo}
        }).then
        (
            res => {
                const data = res.data
                this.setState({
                    data : data[0],
                    table : true,
                    pagination : data[1]
                })
            }
        ).catch(error => console.log(error))

    }

    componentDidMount = () =>{
        
        if(this.props.location.search == "")
        {
            axios.get('http://127.0.0.1:5000/listing',{
            PerPage : this.state.page,
            page : this.state.page_no
            }).then
            (
                res => {
                    const data = res.data
                    console.log(data)
                    this.setState({
                        data : data[0],
                        table : true
                    })
                }
            ).catch(error => console.log(error))
        }
        else{
            this.click()
        }
    }
    render()
    {
        let val = Number(this.state.pagination)
        let pages = []
        for(let i = 1; i < val+1; i++){
                    pages.push(
                    <li className="page-item">
                        <Link to={`/users/listing/?dataPerPage=${this.state.page}&page_no=${i}`} className="badge-pill badge-info mx-1 mt-2" style={{border:"none"}}  >
                            page-{i}
                        </Link>
                    </li>
                    )
        }
        return(
            <div>
                <div>
                    <div className="mt-5 mx-auto  w-25 p-3 border border-info">
                        <h3 className="text-center">Enter Data Per Page</h3>
                        <select className="form-control" name = "page" value={this.state.page}  onChange={this.handleChange}>
                            <option>Select</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
                <h1 className="text-center">User Data</h1>
                <table class="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Details</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.table?(
                            this.state.data.map((ele,index) =>
                                <tr key={ele.id}>
                                    <td>{ele.id}</td>
                                    <td>{ele.Name}</td>
                                    <td><Link to={`/users/edit/${index}/?Name=${ele.Name}&email=${ele.email}&mobile=${ele.mobile}&age=${ele.age}`} ><button className ="badge-pill badge-warning" style={{border:"none"}}>Edit</button></Link></td>
                                    <td><Link to={`/users/details/${index}/?Name=${ele.Name}&email=${ele.email}&mobile=${ele.mobile}&age=${ele.age}`}><button className =" badge-pill badge-success" style={{border:"none"}}>Details</button></Link></td>
                                    <td><Link to={`/users/delete/${index}`}><button className ="badge-pill badge-danger" style={{border:"none"}}>Delete</button></Link></td>
                                </tr>
                            )
                        ):(
                            <tr>
                                <td>Loading</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                
                    <ul className="pagination">
                    <div className="col-10 m-auto row">
                        {pages}
                    </div>
                    </ul>
                
            </div>
        )
    }
}

export default Show
