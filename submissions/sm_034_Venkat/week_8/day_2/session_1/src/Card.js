import React from 'react'
import './Card.module.css'

class Card extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        // console.log(this.props.obj.length)
        return (
            <div id="card">
                <div id="cardbody">
                    <img src={this.props.obj.image} height="150px" alt="Image.jpg" />
                    <div>
                        <div id="titleDiv">
                            <h3>{this.props.obj.title}</h3>
                            <b>{this.props.obj.rating}</b>
                        </div>
                        <p>{this.props.obj.categories.join(',')}</p>
                        <p>Cost is : {this.props.obj.cost}</p>
                        <p> {this.props.obj.payment}</p>
                        <p>Reviews : {this.props.obj.reviews}</p>
                        <p>Votes : {this.props.obj.votes}</p>
                    </div>
                </div>
                <div id="orderBtnDiv">
                    <button>Order Online></button>
                </div>
            </div>
        )
    }
}

export default Card