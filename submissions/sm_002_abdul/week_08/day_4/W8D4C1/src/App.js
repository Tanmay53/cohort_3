import React from 'react';
import './App.css';

import Form from './Component/Form'
import Table from './Component/Table'
import Filter from './Component/Filter'
import Sort from './Component/Sort'

const shortid = require('shortid');

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id:'',
      name:'',
      age:'',
      address:'',
      department:'',
      salary:'',
      filteredData:[],
      data:[]
    }
  }

  componentDidMount(){
    let storageData=JSON.parse(localStorage.getItem('user'))

    if (!storageData){
      localStorage.setItem('user',JSON.stringify([]))
      storageData=[]
    }
    
    this.setState({
      data:[...storageData],
      filteredData:[...storageData]
    })
  }

  handleInputChange=(e)=>{
    let target=e.target;
    this.setState({
      [target.name]:target.value
    })
    this.setState({
      id:shortid.generate()
    })
  }


  handleSubmit=(event)=>{
    event.preventDefault()
    alert(`Congratulations ${this.state.name}, your form has been submitted successfully`);
    
    let newPersonDetails={
      id:this.state.id,
      name:this.state.name,
      age:this.state.age,
      address:this.state.address,
      department:this.state.department,
      salary:this.state.salary
    }
    
    
    this.setState(prevState=>{
      return {
        data:[...prevState.data,newPersonDetails],
        filteredData:[...prevState.data,newPersonDetails]
      }
    })

    console.log('data and filtered data array after submission',this.state.data.data, this.state.data.filteredData);

    let localStorageTillNow=JSON.parse(localStorage.getItem('user'))

    let newLocalStorageData=[...localStorageTillNow,newPersonDetails]

    localStorage.setItem('user',JSON.stringify(newLocalStorageData))

  }

  filter=(e)=>{
    
    let selectedDepartment=e.target.value

    if (selectedDepartment!==''){

      let filteredArr=this.state.data.filter(elem=>{
        return (elem.department===selectedDepartment)
      })

      this.setState({
        filteredData:[...filteredArr]
      })
    }

    else{
      this.setState((prevState)=>{
        return {
          filteredData:[...prevState.data]
        }
        
      })
    }
    
    console.log('selected department and filtered list ',this.state.data,selectedDepartment)
  }

  sort=(e)=>{
    if (e.target.value!==''){
      if (e.target.value==='ascending'){
        let ascendingSortedData=[...this.state.data]

        for (let i=0;i<ascendingSortedData.length-1;i++){
          for (let j=0;j<ascendingSortedData.length-1-i;j++){
            if (parseInt(ascendingSortedData[j].salary)>parseInt(ascendingSortedData[j+1].salary)){
              let temp=ascendingSortedData[j];
              ascendingSortedData[j]=ascendingSortedData[j+1]
              ascendingSortedData[j+1]=temp
            }
          }
        }

        this.setState({
          filteredData:[...ascendingSortedData]
        })

      }

      if (e.target.value==='descending'){
        let descendingSortedData=[...this.state.data]

        for (let i=0;i<descendingSortedData.length-1;i++){
          for (let j=0;j<descendingSortedData.length-1-i;j++){
            if (parseInt(descendingSortedData[j].salary)<parseInt(descendingSortedData[j+1].salary)){
              let temp=descendingSortedData[j];
              descendingSortedData[j]=descendingSortedData[j+1]
              descendingSortedData[j+1]=temp
            }
          }
        }

        this.setState({
          filteredData:[...descendingSortedData]
        })

      }
    }
    else{
      this.setState((prevState)=>{
        return {
          filteredData:[...prevState.data]
        }
      })
    }
  }

  delete=(event)=>{
    let dataAfterDeletion =this.state.filteredData.filter(el=>{
      return el.id!==event.target.id
    })

    this.setState({
      data:[...dataAfterDeletion],
      filteredData:[...dataAfterDeletion]
    })

    let newLocalStorageData=[...dataAfterDeletion]

    localStorage.setItem('user',JSON.stringify(newLocalStorageData))
  }

  render(){
    console.log('this state data --> ',this.state.data)
    console.log('this state filter data --> ',this.state.filteredData)
    console.log('local Storage -->',localStorage.getItem('user'))
      return (
        <div>
          <Form 
            handleInputChange={this.handleInputChange}  
            handleSubmit={this.handleSubmit}
            item={this.state}/>
          
          <div className='input-group'>
            <Filter 
              filter={this.filter}
              filteredData={this.state.filteredData}
              data={this.state.data}/>

            <Sort
              sort={this.sort}
              filteredData={this.state.filteredData}
              data={this.state.data}/>
          </div>

          <Table 
            data={this.state.data}
            filteredData={this.state.filteredData}
            delete={this.delete}
            />

        </div>
      )
  }
}

export default App;
