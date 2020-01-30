import React from 'react'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  render () {
    return (
      <>
        <div className='container mx-auto mt-5'>
          <div className='col-6 d-flex flex-column align-items-center mx-auto'>
            <Link to='/add'><button className='btn btn-outline-primary mt-2'>Add Item</button></Link>
            <Link to='/home'><button className='btn btn-outline-primary mt-2'>View All Groceries</button></Link>
            <Link to='/done'><button className='btn btn-outline-primary mt-2'>View Purchased Groceries</button></Link>
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard
