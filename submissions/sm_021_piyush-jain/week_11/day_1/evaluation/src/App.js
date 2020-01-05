import React from 'react';
import './App.css';
import Table from './component/Table'
import Cart from './component/Cart'
localStorage.clear();
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      db: [],
      name: '',
      id: '',
      descrip: '',
      category: '',
      material: '',
      price: 0,
      boolean: false,
      cart: [],
      total: 0,
      show: false
    }
  }
  //function to add each value in object
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //function to select the Category
  handleCategory = (e) => {
    this.setState({
      category: [e.target.value]
    })
    if (e.target.value == "Appliances") {
      this.setState({
        material: ''
      })
    }
  }
  //function to select the Material
  handleMaterial = (e) => {
    if (this.state.category == "Appliances") {
      this.setState({
        material: ''
      })
    }
    else
      this.setState({
        material: [e.target.value]
      })
  }
  //Function to get Filtered Data
  handleFilter = (e) => {
    var data = JSON.parse(localStorage.getItem('data'))
    console.log(data)
    var filler = e.target.value
    console.log(filler)
    this.setState({
      db: data.filter((item) => item.category == filler)
    })
    console.log(this.state.db)
  }
  //function to add selected item in Cart
  handleAdd = (index) => {
    var obj = this.state.db[index]
    this.state.total += Number(obj.price)
    this.setState({
      cart: [...this.state.cart, obj],
      show: true
    })
  }
  //function to add entire item detail in database
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      db: [...this.state.db, { name: this.state.name, id: this.state.id, descrip: this.state.descrip, category: this.state.category, material: this.state.material, price: this.state.price }],
      boolean: true
    })
    var temp = this.state.db
    localStorage.setItem('data', JSON.stringify(temp))
  }

  render() {
    const heading = <div><h1>PRODUCTS DETAILS</h1></div>
    return (
      <div>
        <div class="text-center"> {heading}</div>
        <div class="form text-center p-3">
          <div>NAME<br></br>
            <input type="text" name="name" onChange={this.handleChange} />
          </div>
          <div>ID<br></br>
            <input type="text" name="id" onChange={this.handleChange} />
          </div>
          <div>DESCRIPTION<br></br>
            <input type="text" name="descrip" onChange={this.handleChange} />
          </div>
          <div><br></br>
            <select onChange={this.handleCategory}>
              <option>Category</option>
              <option>Bedroom</option>
              <option>Living Room</option>
              <option>Dinning</option>
              <option>Appliances</option>
            </select>
          </div>
          <div><br></br>
            <select id="material" onChange={this.handleMaterial}>
              <option>Material</option>
              <option>Teak</option>
              <option>Oak</option>
              <option>Walnut</option>
              <option>Maple</option>
            </select>
          </div>
          <div>PRICE<br></br>
            <input type="text" name="price" onChange={this.handleChange} />
          </div>
        </div>
        <div class="text-center p-3">
          <select onChange={this.handleFilter}>
            <option>Search by...</option>
            <option>Bedroom</option>
            <option>Living Room</option>
            <option>Dinning</option>
            <option>Appliances</option>
          </select>
          <button onClick={this.handleSubmit} class="text-white bg-dark">SUBMIT</button>
          <br></br>
          {this.state.boolean && <Table database={this.state.db} add={this.handleAdd} />}
          <br></br>
          {this.state.show && <Cart database={this.state.cart} />}
          {this.state.show && <div class="text-center display-4">YOUR TOTAL ORDER VALUE IS {this.state.total}</div>}
        </div>
      </div>
    )
  }
}

export default App;
