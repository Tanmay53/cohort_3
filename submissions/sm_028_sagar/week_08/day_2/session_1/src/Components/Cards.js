import React from 'react'
import Style from './cards.module.css'

class Cards extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className={Style.cardSection}>
                    <div className={Style.cardBody}>  
                        <div>
                            <img src='https://img.etimg.com/thumb/msid-65511444,width-643,imgsize-487093,resizemode-4/food-eat-bbq-meat-gettyimages-673139382.jpg'></img>
                        </div>
                        <div className={Style.details}>
                            <div><h3>{this.props.info.name}</h3></div>
                            <div><p>{this.props.info.type.map(ele=>ele+' ')}</p></div>
                            <div className={Style.colorFaint}>Cost Rs. {this.props.info.cost} for one</div>
                            <div className={Style.colorFaint}>Min Rs.50</div>
                            <div>Accepts: {this.props.info.payment.map((ele,i,arr)=>ele+', ')} only</div>
                        </div>
                        <div className={Style.social}>
                            <div className={Style.rating}>{this.props.info.rating}</div>
                            <div>{this.props.info.totalVotes} votes</div>
                            <div>{this.props.info.reviews} reviews</div>
                        </div>  
                    </div>
                    <div className={Style.navigate}>
                        <div>Order Online ></div>
                    </div>
                </div>    
           
        )
    }
}

export default Cards