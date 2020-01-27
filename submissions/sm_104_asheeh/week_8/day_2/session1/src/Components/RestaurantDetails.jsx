import React, { Component } from 'react'
import Card from './Card'

export default class RestaurantDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            tempArr: [],
            RestaurantDb : [
                {
                    name: "URU Brewpark",
                    rating: 4.5,
                    votes: 766,
                    reviews: 512,
                    dishes: "Continental, Pizza, Asian, Dessert",
                    cost: 600,
                    minOrder: 50,
                    deliveryTime: 30,
                    paymentMode: "Online payment only",
                    img: "restaurant.jpeg",
                    key: 1
                },
                {
                    name: "Ashish Food Court",
                    rating: 3.5,
                    votes: 706,
                    reviews: 612,
                    dishes: "Continental, Chicken Masala, Asian, Dessert",
                    cost: 500,
                    minOrder: 40,
                    deliveryTime: 20,
                    paymentMode: "Online payment only",
                    img: "restaurant2.jpeg",
                    key: 2
                },
                {
                    name: "Sudhir Food Lawn",
                    rating: 2.5,
                    votes: 666,
                    reviews: 312,
                    dishes: "Murg Dum Biryani, Pizza, Asian, Dessert",
                    cost: 700,
                    minOrder: 50,
                    deliveryTime: 30,
                    paymentMode: "Online payment only",
                    img: "restaurant1.jpg",
                    key: 3
                },
                {
                    name: "Suyash Rasoi",
                    rating: 3.5,
                    votes: 866,
                    reviews: 402,
                    dishes: "Lamb Biryani, Chicken Roll, Asian, Dessert",
                    cost: 500,
                    minOrder: 50,
                    deliveryTime: 45,
                    paymentMode: "Offline payment only",
                    img: "restaurant5.jpg",
                    key: 4
                },
                {
                    name: "Punjabi Rasoi",
                    rating: 2.5,
                    votes: 760,
                    reviews: 612,
                    dishes: "Aaloo Paratha, Kadhi, Sarso Da Saag, Dessert",
                    cost: 500,
                    minOrder: 50,
                    deliveryTime: 35,
                    paymentMode: "Online payment only",
                    img: "restaurant3.jpg",
                    key: 5
                },
                {
                    name: "APS Continental",
                    rating: 5.0,
                    votes: 1766,
                    reviews: 1512,
                    dishes: "Continental, Pizza, Asian, American, Mexican, Dessert",
                    cost: 600,
                    minOrder: 50,
                    deliveryTime: 30,
                    paymentMode: "Online/Offline payment",
                    img: "restaurant5.jpg",
                    key: 6
                },
                {
                    name: "South Indian Restaurant",
                    rating: 1.5,
                    votes: 766,
                    reviews: 512,
                    dishes: "Continental, Pizza, Asian, Dessert",
                    cost: 600,
                    minOrder: 50,
                    deliveryTime: 30,
                    paymentMode: "Online payment only",
                    img: "restaurant4.jpg",
                    key: 7
                },
                {
                    name: "Apna Dhaba",
                    rating: 3.3,
                    votes: 266,
                    reviews: 512,
                    dishes: "Paneer, Chhola, Kulcha, Paratha",
                    cost: 600,
                    minOrder: 50,
                    deliveryTime: 30,
                    paymentMode: "Offline payment only",
                    img: "restaurant.jpeg",
                    key: 8
                },
                {
                    name: "Rahul Restaurant",
                    rating: 3.5,
                    votes: 766,
                    reviews: 512,
                    dishes: "Continental, Pizza, Asian, Dessert",
                    cost: 600,
                    minOrder: 50,
                    deliveryTime: 30,
                    paymentMode: "Online payment only",
                    img: "restaurant5.jpg",
                    key: 9
                },
                {
                    name: "Udupi",
                    rating: 4.5,
                    votes: 766,
                    reviews: 512,
                    dishes: "Dosa, Upma, Utpam, Dessert",
                    cost: 600,
                    minOrder: 50,
                    deliveryTime: 30,
                    paymentMode: "Online payment only",
                    img: "restaurant1.jpg",
                    key: 10
                }
            ]
             
        }
    }

    sortByStar = (star) => {
        let list = [...this.state.RestaurantDb]
        let newList = list.filter(ele => ele.rating >= star)
        //    console.log(newList)
        this.setState({
            tempArr : newList
        })
    }

    componentDidMount()
    {
        this.setState({
            tempArr: [...this.state.RestaurantDb]
        })
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <Card RestDetails = {this.state.tempArr} />
            </div>
            <div className="row">
                <div className="col-6">
                <button onClick={() => this.sortByStar(1)} type="button" class="btn btn-success m-1">1 star</button>
                <button onClick={() => this.sortByStar(2)} type="button" class="btn btn-success m-1">2 star</button>
                <button onClick={() => this.sortByStar(3)} type="button" class="btn btn-success m-1">3 star</button>
                <button onClick={() => this.sortByStar(4)} type="button" class="btn btn-success m-1">4 star</button>
                </div>
            </div>
            </div>
        )
    }
}
