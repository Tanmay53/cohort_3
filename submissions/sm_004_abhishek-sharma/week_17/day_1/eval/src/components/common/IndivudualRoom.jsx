import React from 'react'

const IndividualRoom = ({ id, name, price, imageUrl, capacity }) => {
    const style = {
        width: "100%",
        height: "250px",
        backgroundSize : "cover",
        backgroundPosition : "center"
    }
    // console.log(id, name, price, imageUrl)
    return (
        <div className = "col-3">
            <div className = "row">
                <div className = "col-10 mx-1" >
                    <img style = {style} src = {`${imageUrl}`} alt = {`${id}`}></img>
                </div>
            </div>
            <div className = "row">
                <div className = "col-6 ">Name</div>
                <div className = "col-4 text-right"> {name} </div>
            </div>
            <div className = "row">
                <div className = "col-6 ">Capacity</div>
                <div className = "col-4 text-right"> {capacity} </div>
            </div>
            <div className = "row">
                <div className = "col-6 ">Price</div>
                <div className = "col-4 text-right"> {price} </div>
            </div>
        </div>
    )
}

export default IndividualRoom
