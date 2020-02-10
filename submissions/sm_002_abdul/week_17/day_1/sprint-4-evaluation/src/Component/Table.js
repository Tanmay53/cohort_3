import React from 'react'

function Table(props){
  return (
    <tbody>
      <tr>
        <td>{props.item.name}</td>
        <td>{props.item.rating}</td>
        <td><a href={props.item.imageUrl} target='blank'>{props.item.imageUrl}</a></td>
        <td>{props.item.language}</td>
        <td>{props.item.rRating ? 'Yes': 'No'}</td>
      </tr>
    </tbody>
  )
}

export default Table