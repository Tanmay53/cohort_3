import React from 'react'
import swal from 'sweetalert'
import axios from "axios"


const deleteUser = (e)=>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not able to recover this user!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            const config = {   
                method: 'POST',
                url: '/delete',
                baseURL:"http://127.0.0.1:5000",
                headers: {'Content-Type': 'application/json'},
                data:{"user_id":Number(e)}}
          axios(config)
          swal("Poof! User has been deleted!", {
            icon: "success",
          });
          
        } else {
          swal("Yoo! User is safe!");
        }
      });
}


export default function UserTable({user}) {
    const {id, name, mobile, age, email} = user
      return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{mobile}</td>
            <td>{email}</td>
            <td>{age}</td>
            <td><button className="btn btn-warning">Edit</button></td>
            <td><button onClick={(e)=>{
              deleteUser(user.id)
            }} className="btn btn-danger">Delete</button></td>      
        </tr>
    )
}
