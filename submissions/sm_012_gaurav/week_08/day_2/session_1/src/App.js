import React from 'react';
import RestaurantDetails from './components/restaurantDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {arr: this.props.data};
  }

  filterArr = (e) => {
    this.setState({
      arr: this.props.data.filter(function(ele) {
        return ele.rating >= Number(e.target.value);
      })
    });
  }

  render() {
    return (
      <div>
        <button value = {0} key = {0} onClick = {this.filterArr} style = {{margin: "10px"}}>All</button>
        <button value = {1} key = {1} onClick = {this.filterArr} style = {{margin: "10px"}}>Atleast 1</button>
        <button value = {2} key = {2} onClick = {this.filterArr} style = {{margin: "10px"}}>Atleast 2</button>
        <button value = {3} key = {3} onClick = {this.filterArr} style = {{margin: "10px"}}>Atleast 3</button>
        <button value = {4} key = {4} onClick = {this.filterArr} style = {{margin: "10px"}}>Atleast 4</button>
        {this.state.arr.map(ele => <RestaurantDetails obj = {ele} key = {ele.name} />)}
      </div>
    );
  }
}

export default App;
