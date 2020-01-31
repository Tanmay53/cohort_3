import React from 'react'
import axios from 'axios'

class Mark extends React.Component {
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

  handleClick = async () => {
    const flag = await axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/purchased',
      data: {
          item_no: this.props.match.params.idx
      }
    }).then(res => true)
    if (flag) {
      alert('Item Marked Successfully')
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <>
      <div className='container mt-5 mx-auto'>
        <div className='col-5 mx-auto'>
          <h2>Item: {this.state.item}</h2>
          <h2 className='mt-2'>Quantity: {this.state.quantity}</h2>
          <button className='mt-2 btn btn-outline-success' data-target='#confirmModal' data-toggle='modal'>Mark Item</button>
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
            <p>Do you want to Mark the Item?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-outline-success" onClick={this.handleClick} data-dismiss="modal">Confirm Mark</button>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }
}

export default Mark
