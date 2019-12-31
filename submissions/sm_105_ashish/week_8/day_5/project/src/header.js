import React from 'react';

function Header () {

    return (
        <div className="row bgImage">
            <div className="col-12 text-right text-light">
                <button type="button" className="btn btn-outline-light m-2">Login</button>
                <button type="button" className="btn btn-outline-light my-2 mx-5">Create an account</button>
                <br></br>
                <div className="text-center">
                    <img src="https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg" className="logo-main img-fluid" alt="logo"/>
                    <br></br>
                    <h1>Find the best restraunts,bars,cafes in Patna</h1>
                </div>
            </div>
            <div className="col-12">
                <div className="row">
                    <div className="col-6 srch m-auto">
                        <div className="row">
                            <select className="custom-select col-4">
                                <option className="dropdown-item" disabled> Select your location</option>
                                <option className="dropdown-item">place#1</option>
                                <option className="dropdown-item">place#2</option>
                                <option className="dropdown-item">place#3</option>
                                <option className="dropdown-item">place#4</option>
                                <option className="dropdown-item">place#5</option>
                            </select>
                            <div className="input-group mb-3 col-7">
                                <input type="text" className="form-control" placeholder="Search for restraunt or cusines." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-light bg-danger" type="button" id="button-addon2">Search</button>
                                </div>       
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Header;