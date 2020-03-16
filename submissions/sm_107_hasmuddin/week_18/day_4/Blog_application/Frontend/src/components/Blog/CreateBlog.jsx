import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {GetUser, fetch_blogs} from "../REDUX/Action"
import axios from 'axios'
import { Button, notification } from 'antd';
import 'antd/dist/antd.css'
import {Link, Redirect} from "react-router-dom"

const CreateBlog = (props) => {
    const [title, setTitle]=useState("")
    const [user_id, setUser]=useState("")
    const [content, setContent]=useState("")
    const [category_id, setCategoryId]=useState(null)
    const [category, setCategory] = useState("")
    const [visible, setCondition]= useState(true)
    const [type, setType]=useState("")
    const [msg, setMsg]=useState("")
    const token = localStorage.getItem("token")
    const openNotification = (type, msg) => {
        notification[type]({
          message: msg,
        });
      };
    useEffect(()=>{
        axios.get("http://127.0.0.1:5000/blog/getData")
        .then(res=>{
             setCategory(res.data.category)
        })
        const config = {
            method:"POST",
            baseURL:"http://127.0.0.1:5000",
            url: '/auth/details',
            headers: {'Content-Type': 'application/json', "Authorization": `bearer ${token}`}
        }
        axios(config).then(res=>{
            setUser(res.data.id)
            console.log(res.data)
        })
        props.fetch_blogs()
    }, [])
    const submit =()=>{
        if(title=="" || content=="" ||category_id==null){
            openNotification("warning","All field Mendetory To fill" )
        }
        else {
            const data ={
                "title":title,
                "content":content,
                "user_id":user_id,
                "category_id":category_id
            }
            const config = {
                method:"POST",
                baseURL:"http://127.0.0.1:5000",
                url: '/blog/create',
                headers: {'Content-Type': 'application/json'},
                data:data
            }
            axios(config)
            .then(res=>{
                openNotification('success', "Blog Added")
                setTimeout(()=>{
                    setCondition(false)
                   }, 4000)
            })
            .catch(e=>{
                    console.error(e)
            })
        }
    }
    if(!visible){
        return <Redirect to="/"/>
    }
    return (
        <>
        <Button icon="left-circle">
            <Link to="/">Go Back</Link>
        </Button>
        <div className="container text-center justify-content-center" >
            <h1>Create Blog</h1>
            <div className="row justify-content-center ">
                <div className="col-lg-6 col-md-8 col-12">
            <input value={title} placeholder="Title" className="form-control my-3" type="text" onChange={(e)=>setTitle(e.target.value)}/>
           <select value={category_id} className="custom-select" onChange={(e)=>setCategoryId(e.target.value)}>
               <option selected disabled>Choose Category</option>
               {category && category.map(cat=>{
                   return <option key={cat.id} value={cat.id}>{cat.Category}</option>
               })}
           </select>
            <textarea value={content} cols="20" rows="10" placeholder="Content" className="form-control my-3" type="text" onChange={(e)=>setContent(e.target.value)}/>
            <Button loading={false} icon="file-add" className="px-5" type="danger" onClick={submit}>Add</Button>
            </div></div>
        </div>
        </>
    )
}

const mapStateToProps=state=>{
    return {
        user:state.user
    }
}
const mapDispatch = dispatch =>{
    return {
        GetUser:user=>dispatch(GetUser(user)),
        fetch_blogs:()=>dispatch(fetch_blogs())


    }
}
export default connect(mapStateToProps, mapDispatch)(CreateBlog)
