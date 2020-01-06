import React from 'react';
import Card from './component/Card'

var data = [
  {
    RestaurantName: "URU BrewPark",
    star: "4.6",
    votes: "766",
    reviews: "512",
    dishes: [" Continental ", " Pizza ", " Asian ", " Desserts"],
    cost: "600 for one",
    min: 50,
    del_time: "30min",
    accept: "Accepts Online Payment only"
  },
  {
    RestaurantName: "LURU BrewPark",
    star: "3.6",
    votes: "906",
    reviews: "812",
    dishes: [" Continental ", " Pizza ", " Asian ", " Desserts"],
    cost: "300 for one",
    min: 30,
    del_time: "45min",
    accept: "Accepts Online Payment only"
  },
  {
    RestaurantName: "Madurai Cafe",
    star: "1.6",
    votes: "1066",
    reviews: "12",
    dishes: [" IDLY ", " Dosa ", " Pani-Puri ", " Ice-Cream"],
    cost: "100 for one",
    min: 20,
    del_time: "50min",
    accept: "Accepts Cash Payment only"
  },
  {
    RestaurantName: "Central Perk",
    star: "2.6",
    votes: "736",
    reviews: "112",
    dishes: [" IDLY ", " Dosa ", " Pani-Puri ", " Ice-Cream"],
    cost: "400 for one",
    min: 10,
    del_time: "25min",
    accept: "Accepts Cash Payment only"
  },
  {
    RestaurantName: "Central Jail",
    star: "4.1",
    votes: "366",
    reviews: "212",
    dishes: [" Continental ", " Chinese ", " North-Indian ", " South-Indian"],
    cost: "800 for one",
    min: 30,
    del_time: "30min",
    accept: "Accepts Online and Cash Payment only"
  },
  {
    RestaurantName: "Harra",
    star: "2.0",
    votes: "1266",
    reviews: "812",
    dishes: [" Continental ", " Chinese ", " North-Indian ", " South-Indian"],
    cost: "1200 for one",
    min: 50,
    del_time: "15min",
    accept: "Accepts Online Payment only"
  },
  {
    RestaurantName: "CHURU BrewPark",
    star: "0.6",
    votes: "166",
    reviews: "112",
    dishes: ["Continental", "Chinese", "North-Indian", "South-Indian"],
    cost: "200 for one",
    min: 50,
    del_time: "25min",
    accept: "Accepts Online and Cash Payment only"
  },
  {
    RestaurantName: "BrewPark",
    star: "2.6",
    votes: "266",
    reviews: "112",
    dishes: [" Continental ", " Snacks ", " North-Indian ", " South-Indian"],
    cost: "800 for one",
    min: 50,
    del_time: "45min",
    accept: "Accepts Online Payment only"
  },
  {
    RestaurantName: "UR BrewPark",
    star: "4.6",
    votes: "766",
    reviews: "512",
    dishes: ["Continental ", " Pizza ", " Asian ", " Desserts"],
    cost: "600 for 2",
    min: 50,
    del_time: "30min",
    accept: "Accepts Online Payment only"
  },
  {
    RestaurantName: "Brew Cafe",
    star: "3.6",
    votes: "266",
    reviews: "712",
    dishes: ["Continental ", " Pizza ", " Asian ", " Desserts"],
    cost: "600 for 2",
    min: 50,
    del_time: "30min",
    accept: "Accepts Online Payment only"
  },
  {
    RestaurantName: "URU Park",
    star: "2.6",
    votes: "766",
    reviews: "512",
    dishes: ["Continental", "Pizza", " Asian ", " Desserts"],
    cost: "600 for 2",
    min: 50,
    del_time: "30min",
    accept: "Accepts Online Payment only"
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      display:data
    }
  }

  handlClick = (ele) => {
    this.setState({
      display: this.state.data.filter((a) => {
        if (a.star > Number(ele.target.value)) {
          return a 
        }
      })
    })
  }
  render() {
    console.log(this.state.display)
    return (

      <div>
        <div className="container p-5">
          <div className="d-flex justify-content-between">
            <div className="h1"> Sort By :</div>
            <div>
              <button value="1" onClick={this.handlClick} type="button" className="btn btn-primary ml-3">Rating Above 1</button>
              <button value="2" onClick={this.handlClick} type="button" className="btn btn-secondary ml-3">Rating Above 2</button>
              <button value="3" onClick={this.handlClick} type="button" className="btn btn-success ml-3">Rating Above 3</button>
              <button value="4" onClick={this.handlClick} type="button" className="btn btn-danger ml-3">Rating Above 4</button>
            </div>
          </div>
        </div>
        {this.state.display.map((item) => <Card key={item.RestaurantName} data={item} />)}Danger
    </div>
    )
  }
}


