import React from 'react'
import Cards from './component/Cards.js'
import './App.css'
import './component/Cards.css'


class App extends React.Component{
  constructor(props){
    super(props)
    this.restaurentDetails = [
      {
        name:'Starbelly',
        type:['Continental','Pizza','Snacks'],
        cost:300,
        payment:['online','UPI'],
        totalVotes:166,
        reviews:522,
        rating:3.0
      },
      {
        name:'Lord Stanley',
        type:['Continental','South','Snacks'],
        cost:150,
        payment:['online'],
        totalVotes:666,
        reviews:522,
        rating:1.2
      },
      {
        name:'Full Moon',
        type:['Coffee','Pizza','Snacks'],
        cost:450,
        payment:['online','NB'],
        totalVotes:366,
        reviews:529,
        rating:4.4
      },
      {
        name:'Sangam',
        type:['Coffee','frooty'],
        cost:250,
        payment:['online','NB'],
        totalVotes:356,
        reviews:429,
        rating:4.9
      },
      {
        name:'Rosmor',
        type:['Dine','Buffet'],
        cost:750,
        payment:['online','NB'],
        totalVotes:366,
        reviews:1002,
        rating:3.7
      },
      {
        name:'The Red Door',
        type:['Coffee','Tea','Biscuit'],
        cost:150,
        payment:['online','NB'],
        totalVotes:1066,
        reviews:899,
        rating:2.3
      },
      {
        name:'Srikanta',
        type:['Lunch','Snacks'],
        cost:250,
        payment:['online','Cash'],
        totalVotes:566,
        reviews:129,
        rating:1.7
      },
      {
        name:'Daily dose',
        type:['Sweets','Snacks'],
        cost:250,
        payment:['online','NB'],
        totalVotes:246,
        reviews:429,
        rating:5.0
      },
      {
        name:'Naturals',
        type:['Icecream'],
        cost:270,
        payment:['online','Cash'],
        totalVotes:166,
        reviews:379,
        rating:4.3
      }
    ];
    this.state = {
      DataObj:[]
    }
  }

  oneStar = () =>{
    this.setState({ 
      DataObj:this.restaurentDetails.filter(ele=>(ele.rating>=1))
    })
  }

  twoStar = () =>{
    this.setState({ 
        DataObj:this.restaurentDetails.filter(ele=>(ele.rating>=2))
    })
  }

  threeStar = () =>{
    this.setState({ 
        DataObj:this.restaurentDetails.filter(ele=>(ele.rating>=3))
    })
  }

  fourStar = () =>{
    this.setState({ 
      DataObj:this.restaurentDetails.filter(ele=>(ele.rating>=4))
    })
  }

  sort = () =>{
    this.setState({ 
        DataObj:this.restaurentDetails.sort((a,b)=>(b.rating-a.rating))
    })
  }


  render() {
    return ( 
      <div className="body">
          <h1>PLEASE SELECT WHICH STAR YOU WANT</h1>
          <button className="buttondisp" onClick={this.oneStar}>1 star</button>
          <button className="buttondisp" onClick={this.twoStar}>2 star</button>
          <button className="buttondisp" onClick={this.threeStar}>3 star</button>
          <button className="buttondisp" onClick={this.fourStar}>4 star</button>  
          <button className="buttondisp" onClick={this.sort}>sort</button>
           <div>
             {this.state.DataObj.map(ele=><Cards key={ele} {...ele}/>)}  
           </div>
      </div>
     )
  } 
 
}

export default App