import React from 'react'

export default class Booking extends React.Component{
    render(){
        return(
            <div>
                <div className="jumbotron">
                <h1 className=""> Welcome To,</h1>
                <h2 className="text-center">Nolan Booking pvt Ltd </h2>
                </div>
                <h4 className="text-success bg-white">Make A New Booking</h4>
                <div className="bg-dark text-info">
                <label>customer name</label>
                <input/>

                <label>customer mobile No.</label>
                <input/>

                <select>
                    <option>Insurance</option>
                    <option>Banking</option>

                    <option>Account Opening</option>
                </select>

                <label>Service</label>
                <input/>

                <label>Date</label>
                <input/>

                <label>Time</label>
                <input/>

                </div>
               
            </div>
        )
    }
}
