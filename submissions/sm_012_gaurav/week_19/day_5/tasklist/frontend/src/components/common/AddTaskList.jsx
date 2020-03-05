import React, { useState } from 'react'
import axios from 'axios'

const AddTaskList = ({ history }) => {
  const [tlname, setName] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    const token = localStorage.getItem('token')
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:5000/tasklist',
      data: {
        tlname
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (!res.data.error) {
        setName('')
        setMessage('TaskList Added Successfully. Redirecting to Dashboard')
        setTimeout(() => history.push('/dashboard'), 3000)
      }
    })
  }
  return (
    <div className='container mx-auto mt-5'>
      <form className='col-6 mx-auto' onSubmit={handleSubmit}>
        <label htmlFor='tlname'>Task List Name</label>
        <input type='text' className='form-control' value={tlname} onChange={(e) => setName(e.target.value)} id='tlname' required />
        <div className='d-flex justify-content-center'>
          <button type='submit' className='btn btn-dark mt-2'>Add Task List</button>
        </div>
      </form>
      {message && <h3 className='text-center text-dark mt-3'>{message}</h3>}
    </div>
  )
}

export default AddTaskList
