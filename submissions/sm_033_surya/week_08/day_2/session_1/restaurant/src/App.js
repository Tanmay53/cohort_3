import React from 'react';
import './App.css';
import Card from "./components/Card"


class Data extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data : [{name:"Naidu Palace",
      image:"https://content.jdmagicbox.com/comp/def_content/pure_veg_restaurants/default-pure-veg-restaurants-22.jpg",
      categeries:"Chinese,North Indian & South Indian",
      cost :"Cost Rs.300 per person",
      time:"min Rs 70 *Upto  40min",
      payment:"Accepts All payments",
      rating:4.4,
      votes:"100votes",
      reviews:"80 reviews"
    },
    {name:"Vishal Restaurants",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-s8KGEMRxONqYHxKXYah0p5Yx1cpPI444vL2MFS1aZyvGd9Ehg&s",
      categeries:"Chinese,North Indian & South Indian",
      cost :"Cost Rs.300 per person",
      time:"min Rs.80 * Upto 40min",
      payment:"Accepts Online transation Only",
      rating:3.7,
      votes:"200votes",
      reviews:"120 reviews"
    },
    {name:"Samrat Chalukya",
      image:"https://content.jdmagicbox.com/comp/bangalore/58/080ppe00458/catalogue/samrat-restaurant-race-course-road-bangalore-home-delivery-restaurants-a139l9.jpg",
      categeries:"Chinese,North Indian & South Indian",
      cost :"Cost Rs.200 per person",
      time:"min Rs.100 * Upto 30min",
      payment:"Accepts All payments",
      rating:4.1,
      votes:"140votes",
      reviews:"100 reviews"
    },
    {name:"The Fatty Bao",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KfOFRlapq1pLDdqQMtMxkoGbTRiu5Yq0VEdAnnrjE-_WE7-C&s",
      categeries:"Chinese,North Indian & South Indian",
      cost :"Cost Rs.300 per person",
      time:"min Rs.200 * Upto 60min",
      payment:"Accepts All payments",
      rating:4.0,
      votes:"80votes",
      reviews:"55 reviews"
    },
    {name:"JW Kitchen – JW Marriott",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLTXoUX4i_WserUSYatM0VJQoIXjg-nqjvyr1_Frg4-4XgaFX&s",
      categeries:"Chinese,North Indian & South Indian",
      cost :"Cost Rs.200 per person",
      time:"min Rs.50 * Upto 30min",
      payment:"Accepts All payments",
      rating:3.9,
      votes:"200votes",
      reviews:"200 reviews"
    },
    {name:"Hoot",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpFQKHoTwx7HDQ-tw7UsznFnTU1wX3nluSkKXcZ46zV9lA2H3&s",
      categeries:"Chinese,North Indian & South Indian",
      cost :"Cost Rs.200 per person",
      time:"min Rs.100 * Upto 30min",
      payment:"Accepts All payments",
      rating:2.1,
      votes:"240votes",
      reviews:"200 reviews"
    },
    {name:"The Local",
      image:"https://static.india.com/wp-content/uploads/2017/03/Bengaluru-restaurants.jpg",
      categeries:"Chinese,North Indian & South Indian",
      cost :"Cost Rs.200 per person",
      time:"min Rs.100 * Upto 30min",
      payment:"Accepts All payments",
      rating:3.6,
      votes:"190votes",
      reviews:"120 reviews"
    },
    {name:"612 East",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlux8bMpBecqLxTdIz56q2kzeIU557VUF6H3BR1rkoxj7dRD8T&s ",
      categeries:"Chinese,North Indian & South Indian",
      cost :"Cost Rs.200 per person",
      time:"min Rs.100 * Upto 30min",
      payment:"Accepts All payments",
      rating:4.1,
      votes:"140votes",
      reviews:"100 reviews"
    },
    {name:"Hakuna Matata",
      image:"https://lh3.googleusercontent.com/REVfct6C9fnjnsfIriKr2fIVKfEk5NISc_gvVVCdMbZn6t8B5dcp90QjqolNgtLacegNWZGIlemczmLkF5TxxlbVCjI=w1000",
      categeries:"North Indian, Asian, Seafood",
      cost :"Cost Rs.600 per person",
      time:"min Rs.100 * Upto 30min",
      payment:"Accepts All payments",
      rating:3.2,
      votes:"240votes",
      reviews:"200 reviews"
    },
    {name:"Bricklane",
      image:"https://lh3.googleusercontent.com/LWN0iVsho7sC8JS7Y0CWYkh8jbFyAT24F4gyu0z0kfN9VYCWNdwIbd7DQ1iHmgHT-z2Nhho8sJZdNDi5lCgj6dUB9Cw=w1000",
      categeries:"Italian, Mediterranean, North Indian",
      cost :"Cost Rs.700 per person",
      time:"min Rs.100 * Upto 30min",
      payment:"Accepts All payments",
      rating:2.3,
      votes:"300votes",
      reviews:"200 reviews"
    }
    ]
    }
  }
  sort(){
   var item = this.state.data.sort((a,b)=> a.rating - b.rating )
   this.setState({
     data:item
   })
  }
  
  rating(a){
    var item = this.state.data.filter((ele) => {
      return ele.rating > a
    })
    this.setState({
      data:item
    })
  }



  render(){
    console.log(this.state.data)
    return(
      <div>
      <div className="btnDiv">
      <button  onClick={()=>this.sort()}>Sort</button>
      <button  onClick={()=>this.rating(4)}>Above4</button>
      <button  onClick={()=>this.rating(3)}>Above3</button>
      <button  onClick={()=>this.rating(2)}>Above2</button>
      <button  onClick={()=>this.rating(1)}>Above1</button>
      </div>
      <div>
      {this.state.data.map(ele =><Card data ={ele}/>)}
      </div>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Data/>
    </div>
  );
}

export default App;
