import React from 'react'
import axios from 'axios'

class Change extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      item: '',
      quantity: 0
    }
  }

  componentDidMount () {
    let idx = parseInt(this.props.match.params.idx) - 1
    axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/listing'
    }).then(res => {
      this.setState({
        item: res.data.data[idx]['item'],
        quantity: res.data.data[idx]['quantity']
      })
    })
  }

  handleChange = (e) => {
    console.log(typeof this.state.quantity)
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
      url: 'http://127.0.0.1:5000/edit/'+this.props.match.params.idx,
      data: this.state
    }).then(res => true)
    if (flag) {
      alert('Item Changed Successfully')
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <>
      <div className='container mt-5 mx-auto'>
        <div className='col-5 mx-auto'>
          <label htmlFor='item'>Item Name</label>
          <input type='text' className='form-control' placeholder='Enter Item Name' onChange={this.handleChange} value={this.state.item} id='item' />
          <label htmlFor='quantity'>Quantity</label>
          <select className='custom-select' onChange={this.handleChange} value={this.state.quantity} id='quantity'>
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
          <button className='mt-2 btn btn-outline-success' data-target='#confirmModal' data-toggle='modal'>Change Item</button>
        </div>
      </div>
      <div className="modal fade" id="confirmModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Confirmation Box</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Do you want to change the data?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-outline-success" onClick={this.handleClick} data-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }
}

export default Change
