import React from 'react';
import Card from './Card'
import './App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			restaurantsArr: [
				{
					image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					title: "Fathers Kitchen",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 600,
					payment: "Accepts online payment only.!",
					rating: 4.3,
					votes: 123,
					reviews: 221
				},
				{
					image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					title: "The Black Pearl",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 400,
					payment: "All cards are acceptable.!",
					rating: 3.9,
					votes: 125,
					reviews: 555
				},
				{
					image: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_60,fl_progressive/w_400,f_auto,c_fit/fort-jadhavgadh/Restaurants_in_Pune,_Hotels_in_Pune,_Fort_jadhavgadh,_Pune",
					title: "The Rooftop Restaurant",
					categories: ["continental", "Rayalaseema Special", "Asian", "deserts"],
					cost: 690,
					payment: "Accepts online payment only.!",
					rating: 3,
					votes: 352,
					reviews: 121
				},
				{
					image: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_60,fl_progressive/w_400,f_auto,c_fit/fort-jadhavgadh/Pune_Restaurants,_Chhajja_Restaurant_in_Pune,_Fort_Jadhavgadh,_Pune",
					title: "Nagarjuna",
					categories: ["South Indian", "North Indian", "deserts"],
					cost: 620,
					payment: "Both cash and cards are accepyable.!",
					rating: 3.1,
					votes: 664,
					reviews: 153
				},
				{
					image: "https://u.tfstatic.com/restaurant_photos/139/408139/169/612/tulip-indian-restaurant-suggestie-b2762.jpg",
					title: "Grills And Tandoor",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 750,
					payment: "Accepts online payment only.!",
					rating: 2.3,
					votes: 966,
					reviews: 674
				},
				{
					image: "https://media-cdn.tripadvisor.com/media/photo-s/11/a2/4a/45/matt-s-rustic-industrial.jpg",
					title: "Carrots Restaurant",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 2600,
					payment: "Accepts online payment only.!",
					rating: 1.2,
					votes: 666,
					reviews: 234
				},
				{
					image: "https://denver.cbslocal.com/wp-content/uploads/sites/15909806/2012/02/indianfood.jpg?w=420",
					title: "Lazeez",
					categories: ["Tiffins", "Chaval", "sweets", "deserts"],
					cost: 200,
					payment: "All cards are acceptable.!",
					rating: 1,
					votes: 866,
					reviews: 293
				},
				{
					image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQib9j8qdZNFhem8iSbIHXCckuy2ZYA35yTsNRusLayYAQm_xh4",
					title: "Truffles",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 500,
					payment: "Accepts online payment only.!",
					rating: 4.5,
					votes: 766,
					reviews: 435
				},
				{
					image: "https://media-cdn.tripadvisor.com/media/photo-s/02/e4/63/21/spice-circle-indian-restaurant.jpg",
					title: "Chianti",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 1600,
					payment: "All cards are acceptable.!",
					rating: 4.6,
					votes: 655,
					reviews: 678
				},
				{
					image: "https://thumbor.thedailymeal.com/O5BS3X-3J3JKcsTKYdYd996xqsI=/870x565/https://www.thedailymeal.com/sites/default/files/slideshows/1943277/2108053/0.jpg",
					title: "Tunday Kababi",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 700,
					payment: "cash only.!",
					rating: 3.5,
					votes: 534,
					reviews: 112
				}], // This is rest array and we don't do any changes to this.
			filteredArray: [
				{
					image: "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					title: "Fathers Kitchen",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 600,
					payment: "Accepts online payment only.!",
					rating: 4.3,
					votes: 123,
					reviews: 221
				},
				{
					image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
					title: "The Black Pearl",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 400,
					payment: "All cards are acceptable.!",
					rating: 3.9,
					votes: 125,
					reviews: 555
				},
				{
					image: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_60,fl_progressive/w_400,f_auto,c_fit/fort-jadhavgadh/Restaurants_in_Pune,_Hotels_in_Pune,_Fort_jadhavgadh,_Pune",
					title: "The Rooftop Restaurant",
					categories: ["continental", "Rayalaseema Special", "Asian", "deserts"],
					cost: 690,
					payment: "Accepts online payment only.!",
					rating: 3,
					votes: 352,
					reviews: 121
				},
				{
					image: "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_260,w_5000,h_2813,r_0,c_crop,q_60,fl_progressive/w_400,f_auto,c_fit/fort-jadhavgadh/Pune_Restaurants,_Chhajja_Restaurant_in_Pune,_Fort_Jadhavgadh,_Pune",
					title: "Nagarjuna",
					categories: ["South Indian", "North Indian", "deserts"],
					cost: 620,
					payment: "Both cash and cards are accepyable.!",
					rating: 3.1,
					votes: 664,
					reviews: 153
				},
				{
					image: "https://u.tfstatic.com/restaurant_photos/139/408139/169/612/tulip-indian-restaurant-suggestie-b2762.jpg",
					title: "Grills And Tandoor",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 750,
					payment: "Accepts online payment only.!",
					rating: 2.3,
					votes: 966,
					reviews: 674
				},
				{
					image: "https://media-cdn.tripadvisor.com/media/photo-s/11/a2/4a/45/matt-s-rustic-industrial.jpg",
					title: "Carrots Restaurant",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 2600,
					payment: "Accepts online payment only.!",
					rating: 1.2,
					votes: 666,
					reviews: 234
				},
				{
					image: "https://denver.cbslocal.com/wp-content/uploads/sites/15909806/2012/02/indianfood.jpg?w=420",
					title: "Lazeez",
					categories: ["Tiffins", "Chaval", "sweets", "deserts"],
					cost: 200,
					payment: "All cards are acceptable.!",
					rating: 1,
					votes: 866,
					reviews: 293
				},
				{
					image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQib9j8qdZNFhem8iSbIHXCckuy2ZYA35yTsNRusLayYAQm_xh4",
					title: "Truffles",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 500,
					payment: "Accepts online payment only.!",
					rating: 4.5,
					votes: 766,
					reviews: 435
				},
				{
					image: "https://media-cdn.tripadvisor.com/media/photo-s/02/e4/63/21/spice-circle-indian-restaurant.jpg",
					title: "Chianti",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 1600,
					payment: "All cards are acceptable.!",
					rating: 4.6,
					votes: 655,
					reviews: 678
				},
				{
					image: "https://thumbor.thedailymeal.com/O5BS3X-3J3JKcsTKYdYd996xqsI=/870x565/https://www.thedailymeal.com/sites/default/files/slideshows/1943277/2108053/0.jpg",
					title: "Tunday Kababi",
					categories: ["continental", "pizza", "Asian", "deserts"],
					cost: 700,
					payment: "cash only.!",
					rating: 3.5,
					votes: 534,
					reviews: 112
				}
			] //every time we change this w.r.t the selection of rating.
		}
	}
	filterRestaurents = (n) => {
		let filteredArr = this.state.restaurantsArr.filter(each => {
			if (Math.floor(each.rating) === n) return each
		})
		console.log(filteredArr)
		return (
			this.setState({
				filteredArray: filteredArr
			})
		)
	}
	render() {
		return (
			<div>
				<div id="filterButtonsDiv">
					<h4>Sort Restaurants by Rating :</h4>
					<button className="rating" onClick={() => this.filterRestaurents(1)}>1</button>
					<button className="rating" onClick={() => this.filterRestaurents(2)}>2</button>
					<button className="rating" onClick={() => this.filterRestaurents(3)}>3</button>
					<button className="rating" onClick={() => this.filterRestaurents(4)}>4</button>
				</div>
				<div id="cardsArr">
					{this.state.filteredArray.map(each => <Card key={each.title} obj={each} />)}
				</div>
			</div>
		)
	}
}

export default App;
