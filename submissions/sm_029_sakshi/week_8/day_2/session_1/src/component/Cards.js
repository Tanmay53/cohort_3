import React from 'react'
import './Cards.css'

class Cards extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className="cardSection">
                    <div className="cardBody">  
                        <div>
                            <img src='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'></img>
                        </div>
                        <div className="details">
                            <div><h3>{this.props.name}</h3></div>
                            <div><p>{this.props.type.map(ele=>ele+' ')}</p></div>
                            <div ><b>Cost Rs.  {this.props.cost} for one</b></div>
                            <div >Min Rs.50</div>
                            <div>Pay by: {this.props.payment.map((ele)=>ele+',')} only</div>
                        </div>
                        <div className="sidetop">
                            <div className="rating">{this.props.rating}</div>
                            <div>{this.props.totalVotes} votes</div>
                            <div>{this.props.reviews} reviews</div>
                        </div>  
                    </div>
                    <div className="navigate">
                        <div>Order Online ></div>
                    </div>
                </div>    
           
        )
    }
}

export default Cards