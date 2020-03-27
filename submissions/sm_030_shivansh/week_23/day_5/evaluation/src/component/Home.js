import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from "./Table";
import Navbar from "./Navbar";

export class Home extends Component {
    render() {
        return (
            <>

                <div className="container">
                    <h1 className="text-center my-5">Jobs Portal</h1>
                    <Table />
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Home
