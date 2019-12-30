import React from 'react';
import Card from './card'
import Mid from './mid'

function MainCont(){
    return (
        <div>
        <div className='container-fluid bgimg'></div>
        <Mid/>
        <div></div>
        <h1>Now showing</h1>
            <div className="row">
                <div className="col-3">
                    <Card/>
                </div>
                <div className="col-3">
                    <Card/>
                </div>
                <div className="col-3">
                    <Card/>
                </div>
                <div className="col-3">
                    <Card/>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-3">
                    <Card/>
                </div>
                <div className="col-3">
                    <Card/>
                </div>
                <div className="col-3">
                    <Card/>
                </div>
                <div className="col-3">
                    <Card/>
                </div>
            </div>
        </div>
    )
    
}

export default MainCont;