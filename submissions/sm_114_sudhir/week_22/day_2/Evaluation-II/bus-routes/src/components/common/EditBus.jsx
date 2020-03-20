import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCity, editBus } from '../../redux/bus/Action'
import { getCities } from '../../redux/get_cities/action'

class EditBus extends Component {
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
    if (this.props.buses) {
        let id = this.props.match.params.id
        let bus = this.props.buses.buses.find(bus => bus.id == id)
        this.setState({
            source: bus.source,
            destination: bus.destination,
            bus: bus.bus
        })
    }
  }

  addCity = async () => {
    let city = {
      city: this.state.city
    }
    let url = 'http://127.0.0.1:5000/add_cities'
    await this.props.addCity(url, city)
    this.props.getCities('http://127.0.0.1:5000/get_cities')
  }

  editBus = () => {
    let bus = {
      source: this.state.source,
      destination: this.state.destination,
      bus: this.state.bus
    }
    let id = this.props.match.params.id
    let url = `http://127.0.0.1:5000/bus/edit/${id}`
    this.props.editBus(url, bus)
  }

  render() {
    console.log(this.props)
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
                            <input 
                                onChange = {this.handleChange} 
                                name="city" type="text" 
                                class="form-control" id="city" 
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <button 
                            onClick={this.addCity} 
                            type="submit" 
                            class="btn btn-primary"
                            >Add City
                        </button>
                    </form>
                  </div>
                  <div className="col">
                    <h4>Add Bus</h4>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group">
                        <label htmlFor="#source">Source</label>
                        <select 
                            id="source" 
                            name="source" 
                            className="form-control" 
                            onChange={this.handleChange}
                            value = {this.state.source}
                        >
                            {this.props.state.cities.cities.map(city => {
                                return (
                                <option value={city.id}>{city.cities}</option>
                                )
                            })}
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="#destination">Destination</label>
                        {console.log(this.state.destination)}
                        <select 
                            // option = {this.state.destination}
                            id="destination" 
                            name="destination" 
                            className="form-control" 
                            onChange={this.handleChange}
                        >
                            {this.props.state.cities.cities.map(city => {
                                return (
                                    <option value={city.id}>{city.cities}</option>
                                )
                            })}
                        </select>
                      </div>
                        <div class="form-group">
                            <label for="bus">Bus Name</label>
                            <input 
                                value = {this.state.bus}
                                onChange = {this.handleChange} 
                                name="bus" type="text" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <button 
                          onClick={this.editBus} 
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
  state: state.cityReducer,
  buses: state.busReducer.buses
})

const mapDispatchToProps = dispatch => ({
  addCity: (url, payload) => dispatch(addCity(url, payload)),
  editBus: (url, payload) => dispatch(editBus(url, payload)),
  getCities: (url) => dispatch(getCities(url))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditBus)
