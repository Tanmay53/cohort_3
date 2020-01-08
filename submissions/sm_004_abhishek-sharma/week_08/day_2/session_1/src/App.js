import React from 'react';
import Restaurant from './components/Restaurant.js'
import './App.css';

const values = [
  { id: "1", restaurantName: "Chai Days", categories: "Cafe, Tea, Beverages, Fast Food", cost: "Cost ₹100 for one", min: "Min ₹50", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "4.5", totalVotes: "348", totalReviews: "178", imgSrc: "https://b.zmtcdn.com/data/pictures/9/18854419/df8ca8a6af89861daeb64a31d0f927c0_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" },
  { id: "2", restaurantName: "Biergarten", categories: "Continental, North Indian, Chinese, Finger Food, Asian", cost: "Cost ₹1300 for one", min: "Min ₹300", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "4.9", totalVotes: "5934", totalReviews: "1655", imgSrc: "https://b.zmtcdn.com/data/pictures/9/18627369/8e6fd6543dc54fac146a6cca6a57a450_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "3", restaurantName: "Sky Lounge", categories: "Continental, Asian, Italian, North Indian", cost: "Cost ₹800 for one", min: "Min ₹150", time: "Up to 30 min", payment: "Accepts online payments only", rating: "4.9", totalVotes: "6534", totalReviews: "2229", imgSrc: "https://b.zmtcdn.com/data/pictures/5/18800355/f7daa5e329af33633f17e083b85ce75d_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "4", restaurantName: "HOC", categories: "Continental, Asian, North Indian", cost: "Cost ₹500 for one", min: "Min ₹120", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "4.9", totalVotes: "6537", totalReviews: "3565", imgSrc: "https://b.zmtcdn.com/data/pictures/0/18323630/36afb40cdcf28ffcc5ec6aa9ccbb60ed_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "5", restaurantName: "Byg Brewski", categories: "Finger Food, Fast Food, North Indian, Italian", cost: "Cost ₹800 for one", min: "Min ₹400", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "4.8", totalVotes: "9501", totalReviews: "6538", imgSrc: "https://b.zmtcdn.com/data/pictures/8/18706428/70dba70f7606efd895dab8f9ed78259f_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "6", restaurantName: "ANTIGRAVITY", categories: "Continental, North Indian, Chinese, BBQ", cost: "Cost ₹800 for one", min: "Min ₹200", time: "Up to 30 min", payment: "Accepts online payments only", rating: "4.8", totalVotes: "2345", totalReviews: "1026", imgSrc: "https://b.zmtcdn.com/data/pictures/9/18765119/716993a594c8f5e9c0313026cea9aa89_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "7", restaurantName: "Windmills", categories: "Continental, North Indian, Kebab, Burger", cost: "Cost ₹1250 for one", min: "Min ₹400", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "4.5", totalVotes: "8506", totalReviews: "6453", imgSrc: "https://b.zmtcdn.com/data/pictures/9/18627369/8e6fd6543dc54fac146a6cca6a57a450_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "8", restaurantName: "NoLimmits", categories: "Chinese, Continental, North Indian", cost: "Cost ₹1000 for one", min: "Min ₹100", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "4.6", totalVotes: "3113", totalReviews: "3113", imgSrc: "https://b.zmtcdn.com/data/pictures/6/53566/b3f413969da569ddf3ef058c20bc385e_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "9", restaurantName: "Boozy Griffin", categories: "European, Continental", cost: "Cost ₹750 for one", min: "Min ₹100", time: "Up to 30 min", payment: "Accepts online payments only", rating: "4.7", totalVotes: "6873", totalReviews: "1296", imgSrc: "https://b.zmtcdn.com/data/pictures/3/18339863/10eb0b11a27832fc1fdbeedfd7c1e97b_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "10", restaurantName: "Tipsy Bull", categories: "Continental, North Indian, Chinese, Mexican, Pizza", cost: "Cost ₹7500 for one", min: "Min ₹150", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "4.7", totalVotes: "1431", totalReviews: "795", imgSrc: "https://b.zmtcdn.com/data/pictures/9/18627369/8e6fd6543dc54fac146a6cca6a57a450_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "11", restaurantName: "Samosa Singh", categories: "Street Food", cost: "Cost ₹100 for one", min: "Min ₹50", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "3.9", totalVotes: "45", totalReviews: "42", imgSrc: "https://b.zmtcdn.com/data/pictures/chains/6/18258966/24f9ecf596e1a206da47755d93fdbb71_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "12", restaurantName: "Mama Mia!", categories: "Desserts, Ice Cream", cost: "Cost ₹100 for one", min: "Min ₹50", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "2.7", totalVotes: "42", totalReviews: "36", imgSrc: "https://b.zmtcdn.com/data/pictures/chains/5/19158395/eae851d003a6b6f8654b2865bb8acb33_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "13", restaurantName: "Pathaan Sir", categories: "Rolls, Fast Food", cost: "Cost ₹150 for one", min: "Min ₹50", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "1.5", totalVotes: "29", totalReviews: "70", imgSrc: "https://b.zmtcdn.com/data/pictures/chains/7/58607/4307315f24c7474ba57b31f38b4abfaa_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "14", restaurantName: "Leon Grill", categories: "Burger, Fast Food, Continental", cost: "Cost ₹300 for one", min: "Min ₹50", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "3.1", totalVotes: "407", totalReviews: "240", imgSrc: "https://b.zmtcdn.com/data/pictures/chains/1/60551/6fb12439d4b7a48d3ea20dade0653380_o2_featured_v2.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"},
  { id: "15", restaurantName: "Muthahalli Veg", categories: "Street Food, North Indian,Chinese,Pizza", cost: "Cost ₹150 for one", min: "Min ₹50", time: "Up to 30 min", payment: "Accepts cash & online payments", rating: "1.1", totalVotes: "966", totalReviews: "683", imgSrc: "https://b.zmtcdn.com/data/pictures/chains/1/18476451/644ba7b17806f4f3e912e32e48d527c5_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"}
]


class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      rating : 0
    }
  }
  handleClick = (star) => {
      this.setState({
        rating : Number(star)
      });
    }
  render(){
    return (
      <div>
        <div className="container-fluid mb-3 text-white bg-dark">
          <div className="row">
            <div className="col text-center">
              <div>
                <h1 className="display-4">Restaurants In Kormangala</h1>
              </div>
            </div>
          </div>
          <div className = "row py-3">
            <div className = "col text-center">
              <button type="button" onClick = {()=>this.handleClick(4)} className="btn btn-light mx-2">4 Star</button>
              <button type="button" onClick = {()=>this.handleClick(3)} className="btn btn-light mx-2">3 Star</button>
              <button type="button" onClick = {()=>this.handleClick(2)} className="btn btn-light mx-2">2 Star</button>
              <button type="button" onClick = {()=>this.handleClick(1)} className="btn btn-light mx-2">1 Star</button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
              {values.filter(data => data.rating > this.state.rating).map((item) => <Restaurant key={item.id} data={item} />)}
          </div>
        </div>
    </div>
    );
  }
}

export default App
