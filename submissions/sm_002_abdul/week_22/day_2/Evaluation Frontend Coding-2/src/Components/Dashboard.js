import React from 'react'
import uuid from 'react-uuid'
import axios from 'axios'
import CityItem from './CityItem'

if (localStorage.getItem('cityData')===null){
  localStorage.setItem('cityData',JSON.stringify([]))
}

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mainData:[]
    }
  }

  componentDidMount(){
    axios.get('/countryStore.json')
    .then(resp=>{
      var cityData = resp.data.citydata
      this.setState({
        mainData:cityData
      })
      localStorage.setItem('cityData',JSON.stringify(cityData))
    })
  }

  editDataSubmit = (id,country,city,population,averageIncome) =>{

    let editedData = this.state.mainData.map(el=>{
      if (el.id === id){
        el.country = country;
        el.city = city;
        el.population = population;
        el.averageIncome = averageIncome
      }
      return el
    })

    this.setState({
      mainData:editedData
    })

    localStorage.setItem('cityData',JSON.stringify(editedData))
  }

  deleteData = (id) =>{
    let dataAfterDeletion = this.state.mainData.filter(el=>{
      return el.id!==id
    })

    this.setState({
      mainData:dataAfterDeletion
    })

    localStorage.setItem('cityData',JSON.stringify(dataAfterDeletion))
  }

  addNewData = () =>{
    let newDataObj = {
      id:uuid(),
      country:'',
      city:'',
      population:'',
      averageIncome:''  
    }

    let dataAfterAddition =[...this.state.mainData,newDataObj]

    this.setState({
      mainData:dataAfterAddition
    })

    localStorage.setItem('cityData',JSON.stringify(dataAfterAddition))
  }

  render(){
    console.log(this.state.mainData)
    return (
      <>
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-lg-12">
              <div className="card">

                <div className="card-header">
                  Data Of All Cities With Average Income and Population
                </div>

                <div className="card-body">
                  <table className="table table-hover">
                    <thead className="thead-dark">
                      <tr>
                        <th>Country</th>
                        <th>City</th>
                        <th>Population</th>
                        <th>Avg Income</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.mainData.map(el=>{
                        return (
                                <CityItem
                                  key={el.id}
                                  item={el}
                                  editDataSubmit = {this.editDataSubmit}
                                  deleteData = {this.deleteData}/>
                        )
                    })}
                    </tbody>
                  </table>
                  <button 
                    className="btn btn-dark row col-2 offset-5 p-2" 
                    onClick={this.addNewData}>
                      Add New Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard