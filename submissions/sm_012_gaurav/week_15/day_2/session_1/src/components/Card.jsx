import React from 'react'
import { Link } from 'react-router-dom'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: this.props.obj
    }
  }

  render () {
    return (
      <>
        <div className='col-5 card p-0 mt-2'>
          <div className='card-body'>
            <p>Item: {this.state.data.item}</p>
            <p>Quantity: {this.state.data.quantity}</p>
            <p>{this.state.data.purchased ? 'Purchased' : 'Not Purchased'}</p>
          </div>
          <div className='card-footer'>
            <Link to={`/change/${this.props.idx}`}><button className='btn btn-outline-success mr-2 ml-2'>Change</button></Link>
            <Link to={`/delete/${this.props.idx}`}><button className='btn btn-outline-success mr-2'>Delete</button></Link>
            <Link to={`/mark/${this.props.idx}`}><button className='btn btn-outline-success'>Mark as Purchased</button></Link>
          </div>
        </div>
      </>
    )
  }
}

export default Card
