import React from 'react'
import SubRest from './SubRest'
import './SubRest.css'
class RestaurantDetails extends React.Component {
    render() {
        return (
            <div>
                {this.props.pick.map(elements => <SubRest key={elements.name} name={elements.name} payment={elements.payment} votes={elements.totalVotes}
                    review={elements.reviews} rating={elements.starRating} cost={elements.costForOne} category={elements.categories} link={elements.url}/>)}
            </div>
        )
    }
}
export default RestaurantDetails