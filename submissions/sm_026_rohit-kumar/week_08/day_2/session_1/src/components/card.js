import React from 'react'
import ReactDOM from 'react-dom'
import './card.module.css'

class Card extends React.Component {
    constructor(props) {
        super(props)

        
    }
    render() {

        const custStyle = {
            margin: '0px',
            padding: '0px'
            }
    
        const size = {
        height: '130px'
        }
        return (
            <div className="card mb-3 w-50">
                <div className="card-body d-flex">
                    <div className=''>
                        <img className="rounded size img-fluid mr-3" src={this.props.value.img}/>
                    </div>
                    <div className=''>
                        <h3><b>{this.props.value.name}</b></h3>
                        <p className='cust-p-style text-muted'>Continental, Pizza, Asian, Desserts</p>
                        <p className='cust-p-style text-muted'>Costs rs 600 for one</p>
                        <p className='cust-p-style'>Min rs 60, Wait up to 30 min</p>
                        <p className='cust-p-style'>Accepts online payment only</p>
                    </div>
                    <div className='pl-3 text-right'>
                        <div className='badge badge-danger'><h5>{this.props.value.rating}</h5></div>
                        <p className='cust-p-style text-muted small'>766 Votes  </p>
                        <p className='cust-p-style text-muted small'>512 reviews</p>                    
                    </div>
                </div>
                <div className='card-footer d-flex flex-row-reverse'>
                    <button className='btn btn-info'>Order Online ></button>
                </div>
            </div>
        )
    }
}

export default Card