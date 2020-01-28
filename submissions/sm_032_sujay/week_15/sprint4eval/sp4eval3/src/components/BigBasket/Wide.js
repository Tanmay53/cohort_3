import React from 'react'
import './Wide.css'

export default class Wide extends React.Component{
    render(){
        return(
            <div>

                <div className="bgimgw img-fluid container-fluid">
                    <div className="row my-5"></div>
                    <div className="row my-5"></div>
                    <div className="row my-5"></div>
                    <div className="row my-5"></div>
                    
                   


                    <div className="container col-4">
                        <h4 className="mt-5 text-center">Wide range of </h4>
                        <h1 className="text-success text-center">fresh daily essentials </h1>
                        <p className="text-center">Choose from widest range of
                         fresh fruits and vegetables, dairy,
                        snacks, beverages and more</p>
                    </div>
                </div>
            </div>
            )
    }
}
