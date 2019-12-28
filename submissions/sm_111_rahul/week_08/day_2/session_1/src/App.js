
import React, { Component } from 'react';
import './App.css';
import RestaurantDetails from './components/restaurantDetails'
 
 var  restaurantDetails =[
    { 
      url:'https://imgmedia.lbb.in/media/2019/10/5d9891c4fe0454c5099a0f6a_1570279876307.jpg',
      itemName : 'URU Brewpark',
      totalVotes : 766,
      totalReviews : 512,
      costForOne : 600,
      categories :['Continental','Pizza','Asian','Deserts'],
      paymentType : 'Accepts online payment only',
      ratings:1.5
    },
    {
      url:'https://st.depositphotos.com/3147737/4947/i/450/depositphotos_49471133-stock-photo-hyderabadi-biryani-a-popular-chicken.jpg',
     itemName : 'Biryani',
     totalVotes : 800,
     totalReviews : 600,
     costForOne : 150,
     categories :['Biryani','Indian','Meals'],
     paymentType : 'Accepts online payment only',
     ratings: 5

    },
    {
      url:'https://previews.123rf.com/images/yatomo/yatomo1705/yatomo170500039/77373117-shinese-dum-sum.jpg',
     itemName : 'Dumsum',
     totalVotes : 900,
     totalReviews : 899,
     costForOne : 375,
     categories :['Chinese','rolls','Asian','meals'],
     paymentType : 'Accepts cash only',
     ratings:4.3


    },
    {
      url:'https://imgmedia.lbb.in/media/2019/10/5d9891c4fe0454c5099a0f6a_1570279876307.jpg',
     itemName : 'URU Brewpark',
     totalVotes : 500,
     totalReviews : 677,
     costForOne : 600,
     categories :['Continental','Pizza','Asian','Deserts'],
     paymentType : 'Accepts online payment only',
     ratings:2.7

    },
    {
      url:'https://img4.nbstatic.in/tr:w-500/5b1769ad4cedfd000b86d679.jpg',
     itemName : 'Rollacosta',
     totalVotes : 655,
     totalReviews : 999,
     costForOne : 250,
     categories :['Chinese','north indian','rolls','snacks'],
     paymentType : 'Accepts cash only',
     ratings:2.5

    },
    {
      url:'https://media-cdn.tripadvisor.com/media/photo-s/0f/b2/5f/35/this-is-what-kfc-is-famous.jpg',
     itemName : 'KFC',
     totalVotes : 1100,
     totalReviews : 657,
     costForOne : 350,
     categories :['Burger','Fastfood'],
     paymentType : 'Accepts cash only',
     ratings:4.1

    },
    {
      url:'https://i.pinimg.com/originals/9a/87/a8/9a87a8a56a5eb1495382922e7f68a6dd.jpg',
     itemName : 'Nasi Lemak',
     totalVotes : 1200,
     totalReviews : 312,
     costForOne : 600,
     categories :['Dishes','Chinese'],
     paymentType : 'Both cash and online payment',
     ratings:3.5
    },
    {
      url:'https://img4.nbstatic.in/tr:w-500/5b1769ad4cedfd000b86d679.jpg',
     itemName : 'Cocunut Smoothie',
     totalVotes : 698,
     totalReviews : 931,
     costForOne : 80,
     categories :['Indian','Juice','Beverages'],
     paymentType : 'Accepts online payment only',
     ratings:1.9

    },
    {
      url:'https://img4.nbstatic.in/tr:w-500/5b1769ad4cedfd000b86d679.jpg',
     itemName : 'Caramel Jam',
     totalVotes : 889,
     totalReviews : 555,
     costForOne : 200,
     categories :['Jam','Asian','Deserts'],
     paymentType : 'Accepts online payment only',
     ratings:5

    },
    {
      url:'https://i.pinimg.com/originals/9a/87/a8/9a87a8a56a5eb1495382922e7f68a6dd.jpg',
     itemName : 'Cabbage Soup',
     totalVotes : 943,
     totalReviews : 643,
     costForOne : 80,
     categories :['Soup','Asian','snacks'],
     paymentType : 'Both cash and online payment',
     ratings: 3.5

    }
 ]

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
       data: restaurantDetails
    };
   
  }
  filterRestaurants = (event) =>{
    console.log(event.target.value)
    let val = Number(event.target.value);
    let details = restaurantDetails.filter(e => {
            return parseInt(e.ratings) > val;
        })
        
  this.setState({
    data : details
  })
}
  
  

  render() { 
    return ( 
      <div className="container">
         
      <div className="m-3 p-3">
        <button className="btn btn-lg btn-danger m-2 " value="1" onClick={this.filterRestaurants}>1 Star</button>
        <button className="btn btn-lg btn-warning m-2" value="2" onClick={this.filterRestaurants}>2 Star</button>
        <button className="btn btn-lg btn-info m-2" value="3" onClick={this.filterRestaurants}>3 Star</button>
        <button className="btn btn-lg btn-success m-2" value="4" onClick={this.filterRestaurants}>4 Star</button>
      </div>
         <RestaurantDetails  ele = {this.state.data}/>
      </div> 
    );
  }
}
 
export default App;