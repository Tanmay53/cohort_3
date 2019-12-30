import React from 'react'

export default function Cart(props) {
    
    return (
        <div className='container'>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Item name</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
            {props.db.map(product =>      
                <tr key={product.uniqueId}>
                    <td>{product.name} </td> 
                    <td>{product.price}</td>
                </tr>
                )}
            </tbody>
            </table>
            <h4>Total Bill: {props.sum} Rs</h4>
        </div>
    )
}

