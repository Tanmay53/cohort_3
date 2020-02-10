import React from "react";

const Home = props => {
  return (
    <React.Fragment>
    <div className = "container">
        <div className = "row">
            <div className = "col-8 offset-2">
                <img src = "landing.png" className = "img-fluid" />
            </div>
        </div>
    </div>
    <div className = "container text-center mt-3">
         <div className = "row my-2">
            <div className = "col">
                <h1 className = "display-4">Invest in everything</h1>
            </div>
        </div>
        <div className = "row my-2">
            <div className = "col">
                <h3 className = "font-weight-normal text-secondary"> Online platform to invest in stocks, derivatives, mutual funds, and more</h3>
            </div>
        </div>
        <div className = "row my-4">
            <div className = "col">
                <button type = "button" className = "btn btn-primary btn-bg my-4"><h5 className = "px-3">Sign up now</h5></button>
            </div>
        </div>
    </div>
    </React.Fragment>
  );
};

export default Home;
