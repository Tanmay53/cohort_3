import React from "react"

class RestaurantDetails extends React.Component {
    render() {
        return (
            <div className="card" style={{width: "30rem"}}>
              <div className="d-flex flex-row m-2">
                <img 
                    src="https://www.thespruceeats.com/thmb/ZunmTodJtTh5qOfWJfxiksmO0MI=/1885x1414/smart/filters:no_upscale()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg" 
                    className="card-img-top w-25 rounded" 
                    alt="food"
                />
                <div className="pl-4">
                  <h4 className="card-title">URU Brewpark</h4>
                  <div className="card-text text-muted small">
                    Continental, Pizza, Asian, Desserts <br/>
                    Cost 600 for one
                  </div>
                </div>
                <div className="m-0">
                  <div>4.3</div>
                  <div className="text-muted">766 votes</div>
                  <div>512 reviews</div>
                </div>
              </div>
            </div>
        )
    }
}

export default RestaurantDetails