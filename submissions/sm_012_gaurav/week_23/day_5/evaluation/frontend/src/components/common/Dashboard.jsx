import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      jobs: [],
      message: '',
      company: '',
      location: '',
      sortBy: '',
      sortType: 'asc',
      companies: [],
      locations: [],
      page: 1,
      numberOfPages: 0
    }
  }

  componentDidMount () {
    Axios({
      url: 'http://localhost:5000/jobs',
      method: 'get',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.setState({
          jobs: res.data.data,
          message: `Total Number of Openings: ${res.data.count}`,
          numberOfPages: Math.ceil(res.data.totalCnt / 10)
        })
      }
      else {
        this.setState({
          message: res.data.message
        })
      }
    })

    Axios({
      method: 'get',
      url: 'http://localhost:5000/company',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(res => {
      if (!res.data.error) {
        let comp = {}
        let loc = {}
        res.data.data.forEach(e => {
          comp[e.name] = e.name
          loc[e.location] = e.location
        })
        this.setState({
          companies: Object.keys(comp),
          locations: Object.keys(loc)
        })
      }
    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      Axios({
        method: 'get',
        url: 'http://localhost:5000/jobs' + this.props.location.search,
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      }).then(res => {
        if (!res.data.error) {
          this.setState({
            jobs: res.data.data,
            message: `Total Number of Openings: ${res.data.count}`,
            numberOfPages: Math.ceil(res.data.totalCnt / 10)
          })
        }
        else {
          this.setState({
            message: res.data.message
          })
        }
      })

      Axios({
        method: 'get',
        url: 'http://localhost:5000/company',
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      }).then(res => {
        if (!res.data.error) {
          let comp = {}
          let loc = {}
          res.data.data.forEach(e => {
            comp[e.name] = e.name
            loc[e.location] = e.location
          })
          this.setState({
            companies: Object.keys(comp),
            locations: Object.keys(loc)
          })
        }
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleFilter = () => {
    this.setState({
      page: 1
    }, () => this.props.history.replace(this.props.location.pathname + `?company=${this.state.company}&location=${this.state.location}&sortBy=${this.state.sortBy}&sortType=${this.state.sortType}&page=${this.state.page}`))
  }

  handlePageClick = (e) => {
    this.setState({
      page: parseInt(e.target.id)
    }, () => this.props.history.replace(this.props.location.pathname + `?company=${this.state.company}&location=${this.state.location}&sortBy=${this.state.sortBy}&sortType=${this.state.sortType}&page=${this.state.page}`))
  }

  handleDelete = e => {
    Axios({
      url: 'http://localhost:5000/jobs/' + e.target.id,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(res => {
      if (!res.data.error) {
        this.setState({
          page: 1
        }, () => this.props.history.replace(this.props.location.pathname + `?company=${this.state.company}&location=${this.state.location}&sortBy=${this.state.sortBy}&sortType=${this.state.sortType}&page=${this.state.page}`))
      }
      else {
        this.setState({
          message: res.data.message
        })
      }
    })
  }

  render () {
    let btnArr = []
    for (let i = 0; i < this.state.numberOfPages; i++) {
      btnArr.push(<button className='btn btn-dark mr-2' key={'btn' + (i + 1)} onClick={this.handlePageClick} id={i + 1}>{i + 1}</button>)
    }
    return (
      <div className='container mx-auto mt-5'>
        <h3 className='text-info text-center'>{this.state.message}</h3>
        <div className='row mt-2 mb-1 d-flex justify-content-between'>
          <div className='col'>
            <label htmlFor='company'>
              Company
            </label>
            <select className='custom-select' id='company' onChange={this.handleChange}>
              <option value=''>Select Company</option>
              {this.state.companies.length > 0 && this.state.companies.map((e, i) => <option value={e} key={i}>{e}</option>)}
            </select>
          </div>
          <div className='col'>
            <label htmlFor='location'>
              Location
            </label>
            <select className='custom-select' id='location' onChange={this.handleChange}>
              <option value=''>Select Location</option>
              {this.state.locations.length > 0 && this.state.locations.map((e, i) => <option value={e} key={i}>{e}</option>)}
            </select>
          </div>
          <div className='col'>
            <label htmlFor='sortBy'>
              Sort BY
            </label>
            <select className='custom-select' id='sortBy' onChange={this.handleChange}>
              <option value=''>Sort By</option>
              <option value='salary'>Salary</option>
              <option value='openings'>Openings</option>
            </select>
          </div>
          <div className='col'>
            <label htmlFor='sortType'>
              Sort Type
            </label>
            <select className='custom-select' id='sortType' onChange={this.handleChange}>
              <option value='asc'>Ascending</option>
              <option value='desc'>Descending</option>
            </select>
          </div>
        </div>
        <div className='container d-flex justify-content-center mb-2'>
          <button className='btn btn-dark' onClick={this.handleFilter}>Filter</button>
        </div>
        {this.state.jobs.length > 0 && (
          <table className='table table-hover table-dark table-bordered shadow-lg mt-5'>
            <thead>
              <tr>
                <th>Company</th>
                <th>Location</th>
                <th>Title</th>
                <th>Salary</th>
                <th>Openings</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.jobs.map(e => (<tr key={e.jobId}>
                <td>{e.name}</td>
                <td>{e.location}</td>
                <td>{e.title}</td>
                <td>{e.salary}</td>
                <td>{e.openings}</td>
                <td><Link to={`/edit/${e.jobId}`}>Edit</Link></td>
                <td><button id={e.jobId} className='btn btn-dark' onClick={this.handleDelete}>Delete</button></td>
              </tr>))}
            </tbody>
          </table>
        )}
        <div className='d-flex mt-2 justify-content-center'>
          {btnArr}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps, null)(Dashboard)
