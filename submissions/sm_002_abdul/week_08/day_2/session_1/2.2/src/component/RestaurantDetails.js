import React from 'react'


class RestaurantDetails extends React.Component{
  constructor(){
    super() 
  }

  render(){
    console.log('properties I got from parents',this.props.item)
    return(
      <div>
      <div className='card'>
        <div className='card-body'>
          <div className='row'>

            <div className='col-3'>
              <img src='https://image.shutterstock.com/image-photo/diet-concept-small-portion-260nw-419532661.jpg' width={200} height={200}/>
            </div>

            <div className='col-5'>
              <h4 style={{color:'maroon'}}>{this.props.item.name}</h4>
              <p className='text-muted'>{this.props.item.cuisine.reduce((a,c)=>{
                return a+','+' '+c
              })}</p>
              <p className='text-muted'>Cost ₹{this.props.item.price} for one</p>
              <p>Min ₹{this.props.item.min} 🌑 Up to 30 min</p>
              <p>Accepts {this.props.item.paymentMethod} only</p>
            </div>

            <div className='col-4'>
              <button disabled className='bg-success text-white'>{this.props.item.rating}</button><br/>
              <small className='text-muted'>{this.props.item.votes} votes</small><br/>
              <small className='text-muted'>{this.props.item.reviews} reviews</small><br/>
            </div>

          </div>
        </div>
        <div className='card-footer row'>
          <div className='col-7'></div>
          <button disabled className='col-2 btn btn-outline-success text-success'>Order Online ></button>
        </div>
      </div>
    </div>
    )
  }
}

export default RestaurantDetails