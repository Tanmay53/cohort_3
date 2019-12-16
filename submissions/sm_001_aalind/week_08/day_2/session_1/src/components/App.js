import React from "react"
import RestaurantDetails from "./RestaurantDetails"

class App extends React.Component {
    render() {
        return (
            <div style={{float: "left"}}>
                <RestaurantDetails rating="1" />
                <RestaurantDetails rating="1" />
                <RestaurantDetails rating="2" />
                <RestaurantDetails rating="3" />
                <RestaurantDetails rating="4" />
                <RestaurantDetails rating="5" />
                <RestaurantDetails rating="3" />
                <RestaurantDetails rating="3" />
                <RestaurantDetails rating="5" />
                <RestaurantDetails rating="4" />
                <RestaurantDetails rating="2" />
            </div>
        )
    }
}

export default App