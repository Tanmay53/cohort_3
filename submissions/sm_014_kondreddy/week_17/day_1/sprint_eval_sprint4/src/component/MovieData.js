import React from 'react';
const MovieData = (props) => {
    console.log(props.data[1].url)
    
    return (
        <div>
            <div className="container">
                <div className="card">
                    <img src="{props.data[0].url}" className="card-img" alt="..." />
                        <div className="card-body">
                            <h2 className ="text">{props.data[0].name}</h2>
                            <p >{props.data[0].language}</p>
                            <p >{props.data[0].rating}</p>
                        </div>
                        <hr></hr>
                        <h4 className="text-center">More Info</h4>
                </div>
            </div>
        </div>
            );
};
export default MovieData;