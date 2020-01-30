import React from 'react'
import axios from 'axios'


const handleClick = (props, button) => {
    if (button == 'YES') {
        axios.post(`http://localhost:5000/purchased`, {
            'item_no': Number(props.match.params.index) + 1
        })
        .then(function (response) {
            // props.history.push('/home')
        })
        .catch((error) => {
            console.log('Error : ', error)
        })
    }

    props.history.push('/home')
}

function MarkItem(props) { 
    const query = new URLSearchParams(props.location.search)
    const old_item = query.get('item')
    const old_quantity = query.get('quantity')
    
    return (
        
        <div className='container mt-5'>
            
            <div className='row'>
                <h3>Mark this item as purchased ?</h3>
                <div className='col-12'>
                    <div className='form-group'>
                        <label>Item : {old_item}</label>
                    </div>
                    <div className='form-group'>
                        <label>Quantity : {old_quantity}</label>
                    </div>
                </div>
                <div className='col-12'>
                    <button onClick={() => handleClick(props, 'YES')} className='btn btn-primary mr-3'>Yes</button>
                    <button onClick={() => handleClick(props, 'NO')} className='btn btn-primary'>No</button>
                </div>
            </div>
        </div>
    )
}


export default MarkItem