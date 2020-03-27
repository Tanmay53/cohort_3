import React, { useState } from 'react'
import axios from "axios"


function Add_emp({ history }) {
    const [dp_list] = useState(JSON.parse(localStorage.getItem("dp_list")))
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [department, setDepart] = useState("")
    const [salary, setSalary] = useState("")
    const add_employee = () => {
        const data = {
            "name": name,
            "gender": gender,
            "department": department,
            "salary": salary
        }
        if (name == "" || gender == "" || department == "" || salary == "") {
            alert("All field mendotary to fill")
        }
        else {
            var config = {
                method: "POST",
                baseURL: "http://127.0.0.1:5000/",
                url: "add_emp",
                headers: { "Content-Type": "application/json" },
                data: data
            };
            axios(config).then(res => {
                history.push("/")
            })
        }

    }
    return (
        <div className="container p-5">
            <h3>Add Employee</h3>
            <input placeholder="Name" className="form-control my-3" type="text" onChange={(e) => setName(e.target.value)} />
            <select name="" className='custom-select my-3' id="" onChange={(e) => setGender(e.target.value)} >
                <option disable selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select >
            <select name="" className="custom-select" id="" onChange={(e) => {
                setDepart(e.target.value)
            }}>
                <option selected disable>Select Department</option>
                {dp_list && dp_list.map(e => {
                    return <option value={e.id}>{e.department}</option>
                })}
            </select>
            <input onChange={(e) => {
                setSalary(e.target.value)
            }} type="text" placeholder="salary" className="form-control my-3" />
            <button onClick={add_employee} className="btn btn-outline-success my-2">Add</button>
        </div >
    )
}

export default Add_emp
