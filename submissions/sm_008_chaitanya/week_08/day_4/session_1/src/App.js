import React from 'react'
import Form from './components/Form'
import Table from './components/Table'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            empdetails:[]
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
        }
    }

    render(){
        return(
            <div>
                <Form parentFunc={this.formSubmit}/>
                <select name="" className="offset-5">
                    <option value="--">--Select--</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="CSE">CSE</option>
                    <option value="MECH">MECH</option>
                    <option value="CIVIL">CIVIL</option>
                </select>
                <select name="">
                    <option value="--">--Select--</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
                <div className="container">
                    <table className="table thead-dark table-responsive col-10 offset-0 col-md-8 col-lg-6 offset-3 table-dark">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Department</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.empdetails.map(element=> <Table key={element.name} name={element.name} age={element.age}
                         address={element.address} department={element.department} salary={element.salary}/>)}
                        </tbody>
                    </table> 
                </div>
                
            </div>
        )
    }
}
export default App
