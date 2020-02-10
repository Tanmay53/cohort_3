import React from 'react'
import RestaurantDetails from './components/RestaurantDetails'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                { name: 'SaiRam Parlour', payment: ['Cash,', 'Credit Card, ', 'Debit Card'], totalVotes: 786, reviews: 512, starRating: 4.1, costForOne: 600, categories: ['South Indian,', ' North Indian,', ' Pizza,',' Deserts'], url:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
                { name: 'Bhrundavan Inn', payment: ['Cash, ', 'Credit Card, ', 'Debit Card'], totalVotes: 7457, reviews: 1122, starRating: 2.6, costForOne: 900, categories: ['Chinese,', ' North Indian,', ' Pizza,', ' Deserts'],url:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
                { name: 'Sagar Restaurant and Bar', payment: ['Cash, ', 'Credit Card, ', 'Debit Card'], totalVotes: 769, reviews: 892, starRating: 4.2, costForOne: 200, categories: ['Japanese,', ' North Indian,', ' Pizza,', ' Deserts', 'South Indian'],url:"https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
                { name: 'Lakshmi Narayana Hotel', payment: ['Cash, ', 'Credit card, ', 'Debit Card'], totalVotes: 874, reviews: 585, starRating: 3.7, costForOne: 300, categories: ['South Indian,', ' North Indian,', ' Pizza,', ' Deserts'],url:"https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
                { name: 'Vantillu Inn', payment: ['Cash, ', 'Credit Card, ', 'Debit Card'], totalVotes: 562, reviews: 712, starRating: 2.1, costForOne: 400, categories: ['South Indian,', ' North Indian,', ' Pizza,', ' Deserts'],url:"https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
                { name: 'Maharshi Restaurant and Bar', payment: ['Cash, ', 'Credit Card, ', 'Debit Card'], totalVotes: 125, reviews: 612, starRating: 1.8, costForOne: 500, categories: ['Chinese,', 'North Indian,', ' Pizza,', ' Deserts'],url:"https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
                { name: 'Novotel palace', payment: ['Cash, ', 'Credit Card, ', 'Debit Card'], totalVotes: 23, reviews: 1012, starRating: 3.5, costForOne: 600, categories: ['South Indian,', ' North Indian,', ' chinese,', ' Deserts'],url:"https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
                { name: 'Dolphin Grand', payment: ['Cash only'], totalVotes: 966, reviews: 892, starRating: 2.8, costForOne: 700, categories: ['Japanese,', ' North Indian,', ' Pizza,', ' Deserts'],url:"https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
                { name: 'Hotel Saranava Bhavan', payment: ['Cash, ', 'Credit Card, ', 'Debit Card'], totalVotes: 456, reviews: 402, starRating: 3.7, costForOne: 800, categories: ['Chinese,', ' North Indian,', ' Icecreams,', ' Deserts'],url:"https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
                { name: 'Daspalla Grand', payment: ['Cash, ', 'Credit Card, ', 'Debit Card'], totalVotes: 296, reviews: 230, starRating: 4.5, costForOne: 550, categories: ['Thalli,', ' North Indian,', ' Pizza,', ' japanese'],url:"https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
                { name: 'Abhiruchi Restaurant', payment: ['Cash, ', 'Credit Card, ', 'Debit Card'], totalVotes: 570, reviews: 653, starRating: 5, costForOne: 620, categories: ['Andhra special,', ' North Indian,', ' Pizza,', ' Deserts'],url:"https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }
            ]
        }
    }

    sortRes=()=>{
        this.setState({
            arr:this.state.arr.sort((a,b)=>a.starRating - b.starRating)
        })
    }
    
    filterRes=(rating)=>{ 
        this.setState({
            arr:this.state.arr.filter((a)=>(a.starRating)>Number(rating))
        })
    }

    render() {
        return (
            <div className="text-center my-5">
                <button onClick={this.sortRes} className="btn btn-lg bg-primary mx-2 text-white">Sort by Ratings</button>
                <button onClick={()=>this.filterRes('1')} className="btn btn-lg bg-danger mx-2 text-white">1 Star</button>
                <button onClick={()=>this.filterRes('2')} className="btn btn-lg bg-warning mx-2 text-white">2 Star</button>
                <button onClick={()=>this.filterRes('3')} className="btn btn-lg bg-success mx-2 text-white">3 Star</button>
                <button onClick={()=>this.filterRes('4')} className="btn btn-lg bg-info mx-2 text-white">4 Star</button>
                <RestaurantDetails pick={this.state.arr} />
            </div>
        )
    }
}

export default App