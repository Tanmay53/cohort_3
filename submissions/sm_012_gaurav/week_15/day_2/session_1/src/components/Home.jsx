import React from 'react'
import axios from 'axios'
import Card from './Card'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/listing'
    }).then(res => {
      this.setState({
        data: res.data.data
      })
    })
  }

  render () {
    return (
      <div className='container mx-auto mt-5'>
        {this.state.data.length === 0 ? <h1 className='text-center'>Grocery List is Empty</h1> : <div className='row d-flex justify-content-between'>{this.state.data.map((e, i) => <Card obj={e} key={i} idx={i + 1} />)}</div>}
      </div>
    )
  }
}

export default Home
