import React from 'react';
import Card from './components/Card'
const DataObj=[
  {
    Title:"Veg Curry1",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"2.8",
    Votes:"842",
    Reviews:"420"
  },
  {
    Title:"Veg Curry2",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"4.5",
    Votes:"842",
    Reviews:"420"
  },
  {
    Title:"Veg Curry3",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"4.9",
    Votes:"842",
    Reviews:"420"
  },
  {
    Title:"Veg Curry4",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"2.4",
    Votes:"842",
    Reviews:"420"
  },
  {
    Title:"Veg Curry5",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"5.0",
    Votes:"842",
    Reviews:"420"
  },
  {
    Title:"Veg Curry6",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"2.0",
    Votes:"842",
    Reviews:"420"
  },
  {
    Title:"Veg Curry7",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"1.5",
    Votes:"842",
    Reviews:"420"
  },
  {
    Title:"Veg Curry8",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"3.2",
    Votes:"842",
    Reviews:"420"
  },
  {
    Title:"Veg Curry9",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"2.2",
    Votes:"842",
    Reviews:"420"
  },
  {
    Title:"Veg Curry10",
    Categories:"Indian, Veg, Healthy",
    Cost:"350",
    Min:"80",
    Time:"15",
    Payment:"all",
    Ratings:"3.9",
    Votes:"842",
    Reviews:"420"
  }
]
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      Data: DataObj

    }
  }
   incSort(XdataObj){
     let incSortedData=XdataObj
     incSortedData.sort(function(a,b){
      return a.Ratings-b.Ratings
    })
    return incSortedData
  }

  decSort(XdataObj){
    let decSortedData=XdataObj
    decSortedData.sort(function(a,b){
     return b.Ratings-a.Ratings
   })
   return decSortedData
 };

  filterAbove(XdataObj,Num){
    console.log(typeof(Num))
    let filteredAbove=XdataObj.filter(function(e){
      return e.Ratings > Num
      
    })
    return filteredAbove
  };


 handleChangeAbove=(e)=>{
   let val=Number(e.target.value)
   console.log(val,typeof(val))
   this.setState({
     Data:this.filterAbove(DataObj,val)
   })
 }

  handleChange=(e)=>{
    let val=e.target.value
    console.log(val)
    if (val==="inc"){
      this.setState({
        Data:this.incSort(DataObj)
      })
    }
    else{
      this.setState({
        Data:this.decSort(DataObj)
      })
    }
  }
  render(){
    return(
      <div>
        <div className="m-3 row ">
          <select onChange={this.handleChange}  className="mx-auto custom-select col-3">
            <option defaultValue disabled>Sort by ratings</option>
            <option value="inc">Increasing</option>
            <option value="dec">Decreasing</option>
          </select>
          <select onChange={this.handleChangeAbove} className="mx-auto custom-select col-5">
            <option defaultValue disabled >Filter by ratings</option>
            <option value="4" >Above 4</option>
            <option value="3">Above 3</option>
            <option value="2">Above 2</option>
            <option value="1">Above 1</option>
          </select>
        </div>
        <div className="row offset-1">
       {this.state.Data.map((e)=><Card key={e.Title} {...e}/>)}
      </div>
      </div>
    )
  }
  
}



export default App;
