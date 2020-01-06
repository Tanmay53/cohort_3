import React from 'react';
import CardCreate from './cardsCreate';

class Card extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      restaurants : [
        {
          name : 'URU Brewpark',
          address : 'Continental, Pizza, Asian, Desserts',
          cost : 600,
          minCost : 50,
          payment : 'online',
          rating : 4.3,
          votes : 766,
          reviews : 512
        },
        {
          name : 'Upadhyay Samosa Famous Dukan',
          address : ' Malahi Pakri Rd, Housing Board Colony,',
          cost : 700,
          minCost : 75,
          payment : 'Debit',
          rating : 4.0,
          votes : 100,
          reviews : 17
        },
        {
          name : 'Kapil Dev Elevens',
          address : 'Frazer Road Dumraow Kothi',
          cost : 200,
          minCost : 123,
          payment : 'Credit',
          rating : 3.2,
          votes : 455,
          reviews : 1000
        },
        {
          name : 'Pind Balluchi (Revolving Restaurant',
          address : 'Biscomaun Bhawan, 16th, 17th & 18th',
          cost : 1200,
          minCost : 200,
          payment : 'online',
          rating : 2.3,
          votes : 233,
          reviews : 423
        },
        {
          name : 'Ji Hujur',
          address : 'Continental, Pizza, Asian, Desserts',
          cost : 300,
          minCost : 45,
          payment : 'online',
          rating : 3.9,
          votes : 799,
          reviews : 780
        },
        {
          name : 'Maurya Famous',
          address : 'Hanuman, Above DOpulance Salon',
          cost : 300,
          minCost : 120,
          payment : 'online',
          rating : 3.8,
          votes : 437,
          reviews : 340
        },
        {
          name : 'Kabab Mahal',
          address : 'Hanuman, Above DOpulance Salon',
          cost : 300,
          minCost : 120,
          payment : 'online',
          rating : 3.8,
          votes : 437,
          reviews : 340
        },
      ],
      newList : []
    }
  }

  loadData(){
    let list = [...this.state.restaurants]
    this.setState({
      newList : list
    });
  }
  //load the data on window load
  componentDidMount() {
    this.loadData()
  }

  sortRating(){
    let list = [...this.state.newList]
    // console.log(list)
    list.sort(function(a, b) {
      var nameA = a.rating
      var nameB = b.rating
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState ({
      newList : list
    });
    
    alert('Hello')
  }

  filterCard (e) {
    let filterRes = [...this.state.restaurants]
    console.log(filterRes)
    console.log(e)
    let btnVal = Number(e)
    let filteredata = filterRes.filter(ele => {
      return Number(ele.rating) > btnVal
    });
    console.log(filteredata)
    this.setState({
      newList : filteredata
    });
  }

  render(){
    return (
      <div>
         <div className="container p-4">
           <div className="row m-3">
             <div className="col">
                <button className="btn btn-primary" onClick={() => {this.sortRating()}}>Sort by Rating</button>
                <button value="4" className="btn mx-2 btn-danger" onClick={(e) => {this.filterCard(e.target.value)}}>Above 4 star</button>
                <button value="3" className="btn mx-2 btn-danger" onClick={(e) => {this.filterCard(e.target.value)}}>Above 3 star</button>
                <button value="2" className="btn mx-2 btn-danger" onClick={(e) => {this.filterCard(e.target.value)}}>Above 2 star</button>
                <button value="1" className="btn mx-2 btn-danger" onClick={(e) => {this.filterCard(e.target.value)}}>Above 1 star</button>
             </div>
           </div>
           <div className="row m-3">
             <div className="col">
                <CardCreate ele = {this.state.newList} />
             </div>
           </div>
         </div>
      </div>
    )
  }
}

function App(){
  return (
    <div>
      <Card/>
    </div>
  )
}

export default App;