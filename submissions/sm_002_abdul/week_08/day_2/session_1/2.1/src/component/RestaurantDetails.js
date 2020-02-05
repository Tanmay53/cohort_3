import React from 'react'


class RestaurantDetails extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state=props.item
    
  }

  render(){
    console.log(this.state.name)
    return(
      <div className='card'>
        <div className='card-body'>
          <div className='row'>

            <div className='col-2'>
              <img src='https://image.shutterstock.com/image-photo/diet-concept-small-portion-260nw-419532661.jpg' width={200} height={200}/>
            </div>

            <div className='col-6'>
              <h4 style={{color:'maroon'}}>{this.state.name}</h4>
              <p className='text-muted'>{this.state.cuisine.reduce((a,c)=>{
                return a+','+' '+c
              })}</p>
              <p className='text-muted'>Cost ₹{this.state.price} for one</p>
              <p>Min ₹{this.state.min} 🌑 Up to 30 min</p>
              <p>Accepts {this.state.paymentMethod} only</p>
            </div>

            <div className='col-4'>
              <button disabled className='bg-success text-white'>{this.state.rating}</button><br/>
              <small className='text-muted'>{this.state.votes} votes</small><br/>
              <small className='text-muted'>{this.state.reviews} reviews</small><br/>
            </div>

          </div>
        </div>
        <div className='card-footer row'>
          <div className='col-7'></div>
          <button disabled className='col-2 btn btn-outline-success text-success'>Order Online ></button>
        </div>
      </div>
    )
  }
}

export default RestaurantDetails