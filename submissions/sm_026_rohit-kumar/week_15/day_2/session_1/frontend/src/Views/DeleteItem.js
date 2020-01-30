import React from 'react'
import axios from 'axios'


const handleClick = (props) => {
    axios.post(`http://localhost:5000/delete`, {
        'item_no': Number(props.match.params.index) + 1
    })
    .then(function (response) {
        props.history.push('/home')
      })
    .catch((error) => {
        console.log('Error : ', error)
    })
}

function DeleteItem(props) { 
    const query = new URLSearchParams(props.location.search)
    const old_item = query.get('item')
    const old_quantity = query.get('quantity')
    
    console.log(old_item, old_quantity)
    console.log(props)

    return (
        
        <div className='container mt-5'>
            
            <div className='row'>
                <h3>Are you sure ?</h3>
                <div className='col-12'>
                    <div className='form-group'>
                        <label>Item : {old_item}</label>
                    </div>
                    <div className='form-group'>
                        <label>Quantity : {old_quantity}</label>
                    </div>
                </div>
                <div className='col-12'>
                    <button onClick={() => handleClick(props)} className='btn btn-primary'>Delete</button>
                </div>
            </div>
        </div>
    )
}


export default DeleteItem