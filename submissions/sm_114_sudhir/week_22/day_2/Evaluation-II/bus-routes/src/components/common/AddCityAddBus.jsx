import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCity, addBus } from '../../redux/bus/Action'
import { getCities } from '../../redux/get_cities/action'

class AddCityAddBus extends Component {
  constructor(props) {
    super(props)
    this.state = {
       city: '',
       source: '',
       destination: '',
       bus: ''
    }
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount = async () => {
    let url = 'http://127.0.0.1:5000/get_cities'
    await this.props.getCities(url)
  }

  addCity = async () => {
    let city = {
      city: this.state.city
    }
    let url = 'http://127.0.0.1:5000/add_cities'
    await this.props.addCity(url, city)

    this.props.getCities('http://127.0.0.1:5000/get_cities')
  }

  addBus = () => {
    let bus = {
      source: this.state.source,
      destination: this.state.destination,
      bus: this.state.bus
    }
    let url = 'http://127.0.0.1:5000/add_bus'
    this.props.addBus(url, bus)
  }

  render() {
    // console.log(this.props.state.cities.cities)
    if (this.props.state.cities.cities) {
      return (
        <div className="container">
           <h2 className="text-center" >Add City and Bus Bus Details</h2>
              <div className="row mb-5">
                  <div className="col">
                    <h4>Add City</h4>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div class="form-group">
                            <label for="city">City Name</label>
                            <input onChange = {this.handleChange} name="city" type="text" class="form-control" id="city" aria-describedby="emailHelp"/>
                        </div>
                        <button onClick={this.addCity} type="submit" class="btn btn-primary">Add City</button>
                    </form>
                  </div>
                  <div className="col">
                    <h4>Add Bus</h4>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group">
                        <label htmlFor="#source">Source</label>
                        <select id="source" name="source" className="form-control" onChange={this.handleChange}>
                          {this.props.state.cities.cities.map(city => {
                            return (
                              <option value={city.id}>{city.cities}</option>
                            )
                          })}
                          </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="#destination">Destination</label>
                        <select id="destination" name="destination" className="form-control" onChange={this.handleChange}>
                          {this.props.state.cities.cities.map(city => {
                              return (
                                <option value={city.id}>{city.cities}</option>
                              )
                            })}
                          </select>
                      </div>
                        <div class="form-group">
                            <label for="bus">Bus Name</label>
                            <input onChange = {this.handleChange} name="bus" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <button 
                          onClick={this.addBus} 
                          type="submit" class="btn btn-primary">Add Bus</button>
                    </form>
                  </div>
              </div>
        </div>
      ) 
    } else {
      return <h1>Data loading</h1>
    }
    
  }
}



const mapStateToProps = (state) => ({
  state: state.cityReducer
})

const mapDispatchToProps = dispatch => ({
  addCity: (url, payload) => dispatch(addCity(url, payload)),
  addBus: (url, payload) => dispatch(addBus(url, payload)),
  getCities: (url) => dispatch(getCities(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddCityAddBus)
