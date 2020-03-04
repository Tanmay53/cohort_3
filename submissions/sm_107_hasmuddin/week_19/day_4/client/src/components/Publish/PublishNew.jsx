import React, { useState } from 'react'
import { Select } from 'antd';
import 'antd/dist/antd.css'
import axios from "axios"
import swal from "sweetalert"

const { Option } = Select;
const authers = [];
const category = []
for (let i = 0; i < 8; i++) {
    authers.push(<Option key={i.toString(36) + i}>{}</Option>);
}
for (let i = 0; i < 8; i++) {
    category.push(<Option key={i.toString(36) + i}>{}</Option>);
}

export default function PublishNew({ history }) {
    const [auther_ar, setAuthers] = useState([])
    const [category_ar, setCategory] = useState([])
    const [title, setTitle] = useState("")
    const [publisher, setPublisher] = useState("")
    const [description, setDescription] = useState("")
    function handleChangeAuther(value) {
        if (value.length !== 0) {
            setAuthers(value)
        }
    }
    function handleChangeCategory(value) {
        if (value.length !== 0) {
            setCategory(value)
        }

        // console.log(category_ar)
    }
    const publish_book = () => {
        if (title == "" || publisher == "" || description == "" || auther_ar.length == 0 || category_ar.length == 0) {
            swal("All field mendotary to fill", "", "warning")
        }
        else {
            const data = {
                "title": title,
                "publisher": publisher,
                "description": description,
                "authers": auther_ar,
                "categories": category_ar
            }
            const config = {
                baseURL: "http://127.0.0.1:5000/",
                method: "POST",
                url: "publish",
                headers: { "Content-Type": "application/json" },
                data: data
            }
            axios(config)
                .then(res => {
                    swal(res.data.message, "", "success")

                })
            setTimeout(() => {
                setTitle("")
                setDescription("")
                setPublisher("")
                setCategory([])
                setAuthers([])
            }, 1500)
        }
    }
    return (
        <div className="container">
            <h4>Add a new Book</h4>
            <div className="d-flex flex-column">
                <code>
                    "publisher":"Maya Publisher",
                    "authers":["Ayaan", "Mihir","Soumik"],
                    "title":"Delta Commision",
                    "description":"lorem spum",
                    "categories":["Force", "History"]
                </code>
                <div className="border row justify-content-center">
                    <input onChange={(e) => setPublisher(e.target.value)} type="text" className="form-control col-8 m-2" placeholder="Publisher" />
                    <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control col-8 m-2" placeholder="Book Title" />
                    <textarea onChange={(e) => setDescription(e.target.value)} className="form-control col-8 m-2" placeholder="Description" cols="30" rows="10"></textarea>
                    <Select mode="tags" placeholder="Authers" className="form-control col-8 m-2" onChange={handleChangeAuther} tokenSeparators={[',']}>
                        {authers}
                    </Select>
                    <Select mode="tags" placeholder="Categories" className="form-control col-8 m-2" onChange={handleChangeCategory} tokenSeparators={[',']}>
                        {category}
                    </Select>
                    <button onClick={publish_book} className="col-8 btn btn-success">Publish</button>
                </div>
            </div>
        </div>
    )
}
