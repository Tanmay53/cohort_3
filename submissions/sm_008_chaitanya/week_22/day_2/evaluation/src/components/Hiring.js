import React from 'react'
import Form from './Form'
import './styles.css'

class Hiring extends React.Component{
    constructor(props){
        super(props)
        this.state={
            empdetails:[],
            filtereddata:[],
        }
    }

    formSubmit=(userdetails)=>{
        let empdata=JSON.parse(localStorage.getItem('data')) 
        if(empdata!=null && empdata.length>0){
            let id=empdata[empdata.length-1].id+1
            userdetails.id=id
        }
        else{
            let id=1
            userdetails.id=id
        }
        this.setState({empdetails:[...this.state.empdetails,userdetails]})
        localStorage.setItem('data',JSON.stringify([...this.state.empdetails,userdetails]))
    }

    componentDidMount(){
        let empdata=JSON.parse(localStorage.getItem('data')) 
        if(empdata==null){
            return null
        }
        else{
            this.setState({empdetails:[...empdata]}) 
            this.setState({filtereddata:[...empdata]})   
        }
    }

    sortChange=(e)=>{
        (e.target.value==="ascending"?
        this.setState({
            filtereddata:this.state.empdetails.sort((a,b)=>Number(a.salary)-Number(b.salary))
        }):this.setState({
            filtereddata:this.state.empdetails.sort((a,b)=>Number(b.salary)-Number(a.salary))
        })
        )
    }

    filterChange=(e)=>{
        (e.target.value==="all"?
        this.setState({filtereddata:this.state.empdetails}):
        this.setState({filtereddata:this.state.empdetails.filter(element=>element.cmpname===e.target.value)})
        )
    }

    handeldel=(id)=>{
        this.setState({filtereddata:this.state.filtereddata.filter(element=>element.id!==id)})
        let deldata=this.state.filtereddata.filter(element=>element.id!==id)
        localStorage.setItem('data',JSON.stringify([...deldata]))
    }

    handlelocalUpdate=(moddata)=>{
        this.setState({filtereddata:this.state.filtereddata.filter(element=>element.id!==moddata.id)})
        let deldata=this.state.filtereddata.filter(element=>element.id!==moddata.id)
        localStorage.setItem('data',JSON.stringify([...deldata,moddata])) 
    }

    render(){
        return(
            <div>
                <Form parentFunc={this.formSubmit}
                      edit={this.handleEdit}
                      filtereddata={this.state.filtereddata}
                      sortChange={this.sortChange}
                      filterChange={this.filterChange}
                      handeldel={this.handeldel}
                      updateFunc={this.handlelocalUpdate}/>
            </div>
        )
    }
}
export default Hiring