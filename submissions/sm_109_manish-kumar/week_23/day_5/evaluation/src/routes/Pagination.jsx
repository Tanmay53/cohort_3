import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    const {totalPosts} = this.props
    let pageNO = []
    let len = Math.ceil(totalPosts.length/20 )
    for(let i = 1; i <= len; i++){
      pageNO.push(i)
    }
    return (
      <nav>
      <ul className='pagination'>
        {pageNO.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => this.props.paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    )
  }
}
