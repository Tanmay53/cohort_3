import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pageNo: 1,
      dataToShow: [],
      proType: 'asc',
      sortType: 'price',
      startDate: '',
      endDate: ''
    }
  }

  componentDidMount() {
    this.setState({
      dataToShow: this.props.meetingData.filter((e, i) => i >= 5*(this.state.pageNo - 1) && i < 5*this.state.pageNo),
      data: this.props.meetingData
    })
  }

  handlePagination = () => {
    this.setState({
      dataToShow: this.state.data.filter((e, i) => i >= 5*(this.state.pageNo - 1) && i < 5*this.state.pageNo)
    })
  }

  handleClick = (e) => {
    let pageNo = Number(e.target.value)
    this.setState({
      pageNo: pageNo
    }, () => this.handlePagination())
  }

  handleChange2 = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
        if (this.state.proType === 'price') {
            if (this.state.sortType === 'asc') {
                let x = this.state.data
                x.sort((a,b) => Number(a.price_per_day) - Number(b.price_per_day))
                this.setState({
                  data: x
                }, () => this.handlePagination())
            }
            else {
                let x = this.state.data
                x.sort((a, b) => Number(b.price_per_day) - Number(a.price_per_day))
                this.setState({
                    data: x
                }, () => this.handlePagination())
            }
        }
        else {
            if (this.state.sortType === 'asc') {
                let x = this.state.data
                x.sort((a,b) => Number(a.capacity) - Number(b.capacity))
                this.setState({
                  data: x
                }, () => this.handlePagination())
            }
            else {
                let x = this.state.data
                x.sort((a, b) => Number(b.capacity) - Number(a.capacity))
                this.setState({
                    data: x
                }, () => this.handlePagination())
            }
        }
    })
  }

  handleDateChange = (e) => {
    this.setState({
      [e.target.id]: e.target.valueAsNumber
    }, () => console.log(this.state))
  }

  searchRoom = () => {
    let x = this.props.meetingData.filter(e => this.state.startDate >= Math.min(Date.parse(e.start_date), Date.parse(e.end_data)) && this.state.endDate <= Math.max(Date.parse(e.start_date), Date.parse(e.end_data)))
    this.setState({
        data: x
    }, () => this.handlePagination())
  }

  render () {
    let totalPages = Math.ceil(this.state.data.length/5)
    let arr = []
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i)
    }
    return (
      <>
        <div className='container mx-auto'>
            <div className = 'row d-flex justify-content-between'>
                <div className='form-group mt-2 col-5'>
                    <label htmlFor='date'>Please Choose Start Date</label>
                    <input type='date' id='startDate' className='form-control' onChange = {this.handleDateChange}></input>
                </div>
                <div className='form-group mt-2 col-5'>
                    <label htmlFor='date'>Please Choose End Date</label>
                    <input type='date' id='endDate' className='form-control' onChange={this.handleDateChange}></input>
                </div>
                <button className='btn btn-success' onClick={this.searchRoom}>Search</button>
            </div>
          <div className='row d-flex justify-content-between'>
            <select onChange={this.handleChange2} name='proType' className='custom-select mt-2'>
                <option value=''>Select Property Type</option>
                <option value='price'>Price</option>
                <option value='capacity'>Capacity</option>
            </select>
            <select onChange={this.handleChange2} name='sortType' className = 'custom-select mt-2'>
                <option value=''>Select Sort Type</option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
            {this.state.dataToShow.map((e, i) => <Card obj = {e} key = {i} startDate={this.state.startDate} endDate={this.state.endDate} />)}
          </div>
          {arr.map(e => <button className='btn mr-2 mt-3 btn-secondary' onClick={this.handleClick} value={e} key={e}>{e}</button>)}
        </div>
      </>
    )
  }
}

const Card = (props) => {
  return (
    <>
      <div className="card col-5 p-0 mt-3">
        <div className="card-header text-center">
            {props.obj.meeting_room_name}
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Floor: {props.obj.floor}</li>
            <li className="list-group-item">Capacity: {props.obj.capacity}</li>
            <li className="list-group-item">Price Per Day: Rs. {props.obj.price_per_day}</li>
        </ul>
        <div className='card-footer'>
          <Link to='/booking'><button className='btn btn-outline-success mx-auto'>Book</button></Link>
        </div>
        </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  meetingData: state.meetingData
})

// const mapDispatchToProps = dispatch => ({
  
// })

export default connect(mapStateToProps, null)(Dashboard)
