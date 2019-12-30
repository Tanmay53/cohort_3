import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props)
        

    }

    render(){
        return (
            <div classNmae="col text-center">
                <div className="m-3">
                <div id="cardImg" className="card p bg-dark text-white">
                    <img className="card-img" src={this.props.imgUrl} alt="Card image"/>
                    <div className="card-img-overlay">
                        <h6 className="card-title">Hindi U/A Comedy</h6>
                        <button className="btn bg-light mt-4"><small>BOOK TICKETS</small></button>
                        <button className="btn btn-light ml-1 mt-4"><small>PLAY TRAILER</small></button>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}

export default Card;