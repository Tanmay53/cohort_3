import React from 'react';
import './Card.css'

class Card extends React.Component{
    render(){
        return (
            <div  className="bodycolor col-4 offset-4  p-2">
                <div  className="cardbckgrnd card-body shadow-lg mx-5 mt-5 mx-auto">
                    <div className="row col-6 mt-3">
                        <p className=" ml-3  col-6badge px-3 py-2 bg-success">Pro</p>
                    </div>
                    <div className="row">
                        <img className="Sizeofimg img-fluid rounded-circle border border-info p-2 mx-auto mt-5" src="https://i0.wp.com/keithmilesphotos.com/wp-content/uploads/2017/01/14IMGP6188.jpg?ssl=1" alt="profilePic" />
                    </div>
                    <div className="row">
                        <p className="text-white h2 mx-auto mt-5 text-muted">{this.props.name}</p>
                    </div>
                    <div className="row">
                        <p className="text-white h5 mx-auto mt-2 text-muted">{this.props.location}</p>
                    </div>
                    <div className="row">
                        <p className="text-white mx-auto mt-2 text-muted">{this.props.description}</p>
                    </div>
                    <div className="row mt-2">
                        <div className="mx-auto">
                            <button type="button" className="btn-lg btn-info mr-1">Message</button>
                            <button type="button" className="btn-lg btn-outline-info">Following</button>
                        </div>
                    </div>
                </div>
                <div  className="card-body  card2bg row mx-5 mb-3 shadow-sm mx-auto">
                    <p className="text-muted ">SKILLS</p>
                    <div className="row mt-1 container-fluid mx-auto">
                        <p className="border mx-2 col py-3 text-center ">{this.props.skills[0]}</p>
                        <p className="border mx-2  col py-4 text-center">{this.props.skills[1]}</p>
                        <p className="border mx-2 col py-3 text-center">{this.props.skills[2]}</p>
                    </div>
                    <div className="row mt-1 container-fluid mx-auto">
                        <p className="border mx-2 col py-3">{this.props.skills[3]}</p>
                        <p className="border mx-2 col py-3 ">{this.props.skills[4]}</p>
                        <p className="border mx-2 col py-3 ">{this.props.skills[5]}</p>
                        <p className="border mx-2 col-3 py-3 ">{this.props.skills[6]}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;