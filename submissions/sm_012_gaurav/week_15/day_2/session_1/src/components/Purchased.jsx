import React from 'react'
import Axios from 'axios'

const TableRow = (props) => {
  return (
    <tr>
      <td>{props.obj.item}</td>
      <td>{props.obj.quantity}</td>
    </tr>
  )
}

class Purchased extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    Axios.get('http://127.0.0.1:5000/purchased').then(res => {
      this.setState({
        data: res.data.data
      })
    })
  }

  render () {
    return (
      <div className='container mt-5 mx-auto'>
        <div className='col-6 mx-auto'>
          {this.state.data.length === 0 ? <h1 className='text-center'>No Items Purchased</h1> : 
            <table className='table table-dark'>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Quantity</td>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(e => <TableRow key={Math.random()} obj={e} />)}
              </tbody>
            </table>}
        </div>
      </div>
    )
  }

}

export default Purchased
