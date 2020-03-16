import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TaskList = ({ match }) => {
  const [taskname, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [update, setUpdate] = useState(false)
  const [updateTasks, setUpdateTasks] = useState(false)
  const tasklistId = match.params.tasklistId

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios({
      url: 'http://localhost:5000/tasklist/' + tasklistId,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (!res.data.error) {
        setTasks(res.data.data)
        setUpdateTasks(true)
      }
    })
  }, [updateTasks, tasklistId])

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios({
      url: 'http://localhost:5000/tasklist/' + tasklistId,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (!res.data.error) {
        setTasks(res.data.data)
      }
    })
  }, [update, tasklistId])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:5000/tasks',
      data: {
        taskspec: taskname,
        tasklist_id: tasklistId
      }
    }).then(res => {
      if (!res.data.error) {
        setTask('')
        setUpdateTasks(false)
      }
    })
  }

  return (
    <div className='container mx-auto mt-5'>
      <div className='col-8 mx-auto'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='task'>Task</label>
          <input type='text' value={taskname} className='form-control' onChange={(e) => setTask(e.target.value)} required />
          <div className='d-flex justify-content-center'>
            <button type='submit' className='btn btn-dark mt-2'>Add Task</button>
          </div>
        </form>
      </div>
      <div className='col-8 mx-auto mt-3'>
        {tasks.length > 0 &&
          (<table className='table table-dark table-bordered table-hover'>
            <thead>
              <tr>
                <th>Task Spec</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((e, i) => <Task key={i + 1} obj={e} handleUpdate={() => setUpdate(!update)} />)}
            </tbody>
          </table>)}
      </div>
    </div>
  )
}

const Task = ({ obj, handleUpdate }) => {
  const [editPressed, setEditPressed] = useState(false)
  const [taskspec, setTaskspec] = useState(obj.taskspec)
  const handleEdit = () => {
    const token = localStorage.getItem('token')
    axios({
      method: 'put',
      url: 'http://localhost:5000/tasks/' + obj.task_id,
      data: { taskspec: taskspec },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (!res.data.error) {
        setEditPressed(false)
        handleUpdate()
      }
    })
  }

  const handleDelete = () => {
    const token = localStorage.getItem('token')
    axios({
      method: 'delete',
      url: 'http://localhost:5000/tasks/' + obj.task_id,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (!res.data.error) {
        handleUpdate()
      }
    })
  }
  return (
    <tr>
      <td>
        {!editPressed ? <p>{obj.taskspec}</p> : <input type='text' className='form-control' onChange={(e) => setTaskspec(e.target.value)} value={taskspec} />}
      </td>
      <td>
        <button className='btn btn-danger' onClick={!editPressed ? () => setEditPressed(true) : handleEdit}>{!editPressed ? 'Edit' : 'Update'}</button>
      </td>
      <td>
        <button className='btn btn-danger' onClick={() => handleDelete()}>Delete</button>
      </td>
    </tr>
  )
}

export default TaskList
