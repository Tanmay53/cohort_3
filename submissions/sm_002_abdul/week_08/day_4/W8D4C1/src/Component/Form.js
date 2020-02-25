import React from 'react'

function Form(props) {
    return (
      <form onSubmit={props.handleSubmit}>
        <div className='form-group'>
          <label>
            Name :
            <input
            className='form-control' 
            type='text'
            placeholder='Enter Name'
            value={props.item.name}
            onChange={props.handleInputChange}
            name='name'
            />
          </label>
        </div>

        <div className='form-group'>
          <label>
            Age :
            <input 
            className='form-control'
            type='number'
            placeholder='Enter Age'
            value={props.item.age}
            onChange={props.handleInputChange}
            name='age'
            />
          </label>
        </div>

        <div className='form-group'>
          <label>
            Address :
            <textarea
            className='form-control'
            type='text'
            placeholder='Enter Address'
            value={props.item.address}
            onChange={props.handleInputChange}
            name='address'
            />
          </label>
        </div>

        <div className='form-group'>
          <label>
            Department :
            <select
            className='form-control'
            name='department'
            value={props.item.department}
            onChange={props.handleInputChange}>
              <option value=''>Department</option>
              <option value='hr'>Human Resources</option>
              <option value='security'>Security</option>
              <option value='marketing'>Marketing</option>
              <option value='it'>Information Technology</option>
              <option value='finance'>Finance</option>
            </select>
          </label>
        </div>

        <div className='form-group'>
          <label>
            Salary :
            <input
            className='form-control' 
            type='number'
            placeholder='Enter Salary'
            value={props.item.salary}
            onChange={props.handleInputChange}
            name='salary'
            />
          </label>
        </div>

        <input 
          className='btn btn-primary' 
          type='submit' 
          value='submit'/>

      </form>
    )
}

export default Form