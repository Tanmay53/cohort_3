import React, { useState } from 'react'
import { fetch_response } from "../REDUX/Action"
import { connect } from "react-redux"
function SearchBy({ fetch_response }) {
    const [type, setType] = useState("")
    const [searchKey, setSearch] = useState("")
    const sumbitData = (e) => {
        e.preventDefault()
        if (type !== "") {
            fetch_response(`/filter_${type}`, { "search_key": searchKey })
            console.log(fetch_response)
        }
        else {
            alert("Please Select options")
        }
    }
    return (
        <div className="row p-5 container justify-content-center">
            <select className="col-3 mx-1 custom-select" onChange={(e) => setType(e.target.value)} name="sd" id="">
                <option selected disable>Select by Search</option>
                <option value="category">Category</option>
                <option value="name">Auther's Name</option>
            </select>
            <form className="col-8 row">
                <input type="text" className="form-control col-8 mx-1" onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-success col-3" onClick={sumbitData}>Search</button>
            </form>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        fetch_response: (url, data) => dispatch(fetch_response(url, data))
    }
}

export default connect(null, mapDispatchToProps)(SearchBy)
