import React from 'react'

const Rest = (props)=>{
    const style ={
        width: "50rem"
    }
    
    console.log(props)
    return(
        <div>
            <div className="card my-4" style ={style}>
                <div>
                    <div className="card-body">
                        <h4 className="card-title fon-weight-bold text-white">{props.label.name}</h4>
                    </div>
                    <div className="card-body ">
                        <img className="card-img-top" src={props.label.image} alt="Card image cap" />
                    </div>
                </div>
                <div className="card-body bg-light spanFoot">
                    <p className="card-text">TYPE : {props.label.type.map( ele=> (<button type="button" className="btn btn-outline-success btn-sm mx-2">{ele}</button>))}</p>
                    <p className="card-text">COST FOR ONE FULL MEAL: {props.label.cost}</p>
                    <p className="card-text">MINIMUM ORDER  : {props.label.min}</p>
                    <p className="card-text">PAYMENT OPTIONS : {props.label.pay}</p>
                    <p className="card-text">TIME REQUIRED : {props.label.time}</p>
                    <p className="card-text">POPULARITY :
                        <button type="button" className="btn btn-outline-success btn-sm mx-2"> {props.label.votes}</button>
                        <button type="button" className="btn btn-outline-success btn-sm mx-2"> {props.label.reviews}</button>
                        <button type="button" className="btn btn-outline-success btn-sm mx-2"> {props.label.rating}</button>
                    </p>
                    <button type="button" className="btn btn-outline-primary float-right" >Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Rest