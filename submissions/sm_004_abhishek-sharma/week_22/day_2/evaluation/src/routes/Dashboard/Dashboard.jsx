import React from 'react'
import Table from "../../components/Table"

const Dashboard = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col text-center">
                    <h1>Dashboard</h1>
                </div>
            </div>
            <Table />
        </div>
    )
}

export default Dashboard
