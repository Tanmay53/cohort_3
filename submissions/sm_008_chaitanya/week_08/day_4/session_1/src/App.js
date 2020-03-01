import React from 'react'
import Form from './components/Form'
// import Table from './components/Table'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            empdetails:[],
            filtereddata:[],
        }
    }
    
    formSubmit=(userdetails)=>{
        this.setState({empdetails:[...this.state.empdetails,userdetails]})
        localStorage.setItem('data',JSON.stringify([...this.state.empdetails,userdetails]))
    }

    componentDidMount(){
        var empdata=JSON.parse(localStorage.getItem('data')) 
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
        this.setState({filtereddata:this.state.empdetails.filter(element=>element.department===e.target.value)})
        )
    }

    handeldel=(name)=>{
        this.setState({filtereddata:this.state.filtereddata.filter(element=>element.name!==name)})
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
                      />
                {/* <Table tabdata={this.state.filtereddata}
                        performSort={this.sortChange}
                        performFilter={this.filterChange}
                        performDelete={this.handeldel}
                        performEdit={this.handleEdit}/> */}
            </div>
        )
    }
}
export default App
