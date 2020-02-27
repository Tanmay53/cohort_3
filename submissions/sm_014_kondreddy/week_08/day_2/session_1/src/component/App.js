import React from 'react';
import Restaurent from "./Restaurent";
import './Restaurent.css';

class App extends React.Component{
  constructor(props) {
    super (props)
    this.restaurentDetails = [
          { imgurl :"./download.jpeg",
            name : "Andhra Spice",
            description:"Continental,Pizza,Asian,Desserts",
            cost : 540,
            location :"banglore",
            payment : "accept online payment only",
            rating : 3.2 ,
            votes : "450 votes",
            reviews : "560 reviews"
          },
          { imgurl :"./download.jpeg",
            name : "Manasa Inn",
          description:"Continental,Pizza,Asian,Desserts",
            cost : 600,
            location :"banglore",
            payment : "accepts online payment only",
            rating : 3.5,
            votes : "400 votes",
            reviews : "700 reviews"
          },
          { imgurl :"./download.jpeg",
            name : "cafe",
          description:"Continental,Pizza,Asian,Desserts",
            cost : 450,
            location :"banglore",
            payment : "accepts online payment only",
            rating : 2.9 ,
            votes : "480 votes",
            reviews : "700 reviews"
          },
          { imgurl :"./download.jpeg",
            name : "Ruchita",
            description:"Continental,Pizza,Asian,Desserts",
            cost : 400,
            location :"banglore",
            payment : "accept online payment only",
            rating : 4.1 ,
            votes : "750 votes",
            reviews : "410 reviews"
          },
          { imgurl :"./download.jpeg",
            name : "Mayura",
          description:"Continental,Pizza,Asian,Desserts",
            cost : 650,
            location :"banglore",
            payment : "accept online payment only",
            rating : 4.4 ,
            votes : "300 votes",
            reviews : "350 reviews"
          },
          { imgurl :"./download.jpeg",
            name : "Sarvana",
          description:"Continental,Pizza,Asian,Desserts",
            cost : 800,
            location :"banglore",
            payment : "accept online payment only",
            rating : 2.5 ,
            votes : "400 votes",
            reviews : "520 reviews"
          },
          { imgurl :"./download.jpeg",
            name : "Royal",
            description:"Continental,Pizza,Asian,Desserts",
            cost : 650,
            location :"banglore",
            payment : "accept online payment only",
            rating : 1.9 ,
            votes : "450 votes",
            reviews : "600 reviews"
          },
          { imgurl :"./download.jpeg",
            name : "Meenakshi",
          description:"Continental,Pizza,Asian,Desserts",
            cost : 350,
            location :"banglore",
            payment : "accept online payment only",
            rating : 4.5 ,
            votes : "590 votes",
            reviews : "800 reviews"
          },
          { imgurl :"./download.jpeg",
            name : "Luxury",
          description:"Continental,Pizza,Asian,Desserts",
            cost : 540,
            location :"banglore",
            payment : "accept online payment only",
            rating : 4.2,
            votes : "480 votes",
            reviews : "560 reviews"
          }

      ]
      this.state = {
        filteredObj:[]
      }
    }
    starFilter = (num) =>{
      this.setState({ 
        filteredObj:this.restaurentDetails.filter(ele=>(ele.rating>=num))
      })
    }
  
    sort = () =>{
      this.setState({ 
        filteredObj:this.restaurentDetails.sort((a,b)=>(b.rating-a.rating))
      })
    }
    render() {
      return ( 
        <div>
            <button onClick={()=>this.starFilter(1)}>1 star</button>
            <button onClick={()=>this.starFilter(2)}>2 star</button>
            <button onClick={()=>this.starFilter(3)}>3 star</button>
            <button onClick={()=>this.starFilter(4)}>4 star</button>  
            <button onClick={this.sort}>sort</button>
             <div>
               {this.state.filteredObj.map(ele=><Restaurent key={ele.name} data={ele}/>)}  
             </div>
        </div>
       )
    }   
  }

export default App
