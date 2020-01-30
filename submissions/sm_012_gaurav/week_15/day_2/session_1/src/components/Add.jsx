import React from 'react'
import axios from 'axios'

class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      item: '',
      quantity: 5
    }
  }

  handleChange = (e) => {
    if (e.target.id === 'quantity') {
      this.setState({
        [e.target.id]: parseInt(e.target.value)
      })
    }
    else {
      this.setState({
        [e.target.id]: e.target.value.trim()
      })
    }
  }

  handleClick = async () => {
    const flag = await axios({
                    method: 'post',
                    url: 'http://127.0.0.1:5000/create',
                    data: this.state
                  }).then(res => true)
    if (flag) {
      alert('Item Added Successfully')
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <>
        <div className='container mt-5 mx-auto'>
          <div className='col-5 mx-auto'>
            <label htmlFor='item'>Item Name</label>
            <input type='text' className='form-control' placeholder='Enter Item Name' onChange={this.handleChange} value={this.state.item} id='item'></input>
            <label htmlFor='quantity'>Quantity</label>
            <select className='custom-select' onChange={this.handleChange} id='quantity'>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
            </select>
            <button className='mt-2 btn btn-outline-success' onClick={this.handleClick}>Add Item</button>
          </div>
        </div>
      </>
    )
  }
}

export default Add
