import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import { fetch_response } from "../REDUX/Action"
import Books from "./Books"
import SearchBy from "./SearchBy"
function Dashboard({ fetch_response, data }) {
    // console.log("its working", get)
    useEffect(() => {
        fetch_response("", "")
    }, [])
    return (
        <div className="container">
            <SearchBy />
            <h3>Books</h3>
            <Books />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetch_response: (url, data) => dispatch(fetch_response(url, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
