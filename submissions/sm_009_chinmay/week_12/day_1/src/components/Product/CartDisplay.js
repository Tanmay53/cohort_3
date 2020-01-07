import React from 'react'

function CartDisplay(props) {
    return (
        <div className='text-center' >
            <h4 className='text-center mx-auto'>Cart Details</h4>
            <table className='mx-5 border text-center table table-bordered'>
                <tr>
                    <th>Item Name</th>
                    <th>Item Price</th>
                </tr>
                {props.data.map( (e)=> 
                    <tr key={e.itemID}>
                        <td>{e.itemName}</td>
                        <td>{e.price}</td>
                    </tr>
                )}
            </table>
            <h5 className='text-center'>Total Cart Value is ₹ {props.total}</h5>
        </div>
    )
}
export default  CartDisplay