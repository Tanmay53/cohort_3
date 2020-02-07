import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            id:"",
            count:5,
            offset:1,
            page:0,
            Num_pages:0,
            btn_array :[]
        }
    }
    async componentDidMount(){
        console.log("hi")
       await axios.get(`http://localhost:5000/listing?count=${this.state.count}&offset= ${this.state.page * this.state.count}`)
        .then  ((res)=>
        this.setState({
            data:res.data.data_list,
            Num_pages:res.data.total_pages
        })
     )
    }
    // async componentWillReceiveProps(){
    //     console.log("hisasfd")
    //    await axios.get(`http://localhost:5000/listing?count=${this.state.count}&offset= ${this.state.page * this.state.count}`)
    //     .then  ((res)=>
    //     this.setState({
    //         data:res.data.data_list,
    //         Num_pages:res.data.total_pages
    //     })
    //     // console.log(res,"hhhhh")
    //  )
    // }
    delete_data=(id)=>{
        axios.delete(`http://localhost:5000/delete/${id}`)
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }
    handleChannge=(e)=>{
        this.setState({
            count:e.target.value
        })
    }
    handleclick=()=>{
        axios.get(`http://localhost:5000/listing?count=${this.state.count}&offset= ${this.state.page * this.state.count}`)
        .then  ((res)=>{
        this.setState({
            data:res.data.data_list,
            Num_pages:res.data.total_pages
        })
                let i = 1
            let temp = []
            while (i<= this.state.Num_pages){
                temp.push(i) 
                i++
            }
        this.setState({
            btn_array:temp
         })
         }
     )

      
    }
    gettingdata=(ele)=>{
         axios.get(`http://localhost:5000/listing?count=${this.state.count}&offset= ${ele * this.state.count}`)
        .then  ((res)=>
        this.setState({
            data:res.data.data_list,
            Num_pages:res.data.total_pages
        })
     )
    }
    render() {
        // console.log(this.state)
        return (
            <>
            <select value = {this.state.count} onChange={this.handleChannge} onClick={this.handleclick}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
            </select>
              <div className ="container">
                 {this.state.btn_array.map((ele)=><Link to={`/?count=${this.state.count} & offset=${(ele-1) * this.state.count}`}><button onClick={()=>this.gettingdata(ele)}>{ele}</button></Link>) }
                  <table className="table">
                      <thead className="thead-dark">
                      <tr><th>Id</th><th>Name</th><th>Age</th><th></th><th></th></tr>
                      </thead>
                      <tbody>
                         {this.state.data.map((ele)=><tr><td><Link to={`user/${ele.id}`} >{ele.id}</Link></td><td>{ele.name}</td><td>{ele.age}</td><td><button onClick={()=>this.delete_data(ele.id)}>Delete</button></td><td><Link to ={`/edit/${ele.id}`}><button>Edit</button></Link></td></tr>)}
                    </tbody>
                    </table>
                </div>  
            </>
        )
    }
}
export default Home