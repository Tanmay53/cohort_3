import React from 'react'

class CityItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isEdit:false
    }
    this.countryInput = React.createRef()
    this.cityInput = React.createRef()
    this.populationInput = React.createRef()
    this.averageIncomeInput = React.createRef()
  }

  editData = () =>{
    this.setState(prevState=>{
      return {
        isEdit : !prevState.isEdit
      }
    })
  }

  editDataSubmit = () =>{
    const {id} = this.props.item

    this.setState(prevState=>{
      return {
        isEdit : !prevState.isEdit
      }
    })

    this.props.editDataSubmit(
      id, 
      this.countryInput.current.value,
      this.cityInput.current.value,
      this.populationInput.current.value,
      this.averageIncomeInput.current.value
    )
  }

  deleteData = () =>{
    const {id} = this.props.item
    
    this.props.deleteData(id)
  }

  render(props){

    const { id,country,city,population,averageIncome} = this.props.item

    return (
      <>
        {
          this.state.isEdit
          ?
          (
            <tr key={id}>

              <td>
                <input
                  defaultValue={country}
                  ref = {this.countryInput}/>
              </td>

              <td>
                <input
                  defaultValue={city}
                  ref = {this.cityInput}/>
              </td>

              <td>
                <input
                  defaultValue={population}
                  ref = {this.populationInput}/>
              </td>

              <td>
                <input
                  defaultValue={averageIncome}
                  ref = {this.averageIncomeInput}/>
              </td>

              <td>
                <i className="fas fa-edit" onClick={this.editDataSubmit}></i>
              </td>

              <td>
                <i className="fas fa-trash-alt"></i>
              </td>

            </tr>
          )
          :
          (
            <tr key={id}>

              <td>
                {country}
              </td>

              <td>
                {city}
              </td>

              <td>
                {population}
              </td>

              <td>
                {averageIncome}
              </td>

              <td>
                <i className="fas fa-edit" onClick={this.editData}></i>
              </td>

              <td>
                <i className="fas fa-trash-alt" onClick={this.deleteData}></i>
              </td>

            </tr>
          )
        }
      </>
    )
  }
}

export default CityItem