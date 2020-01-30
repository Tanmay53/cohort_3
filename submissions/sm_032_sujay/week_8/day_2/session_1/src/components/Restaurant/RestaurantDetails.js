import React from "react"

// export default class RestaurantDetails extends React.Component{

//     constructor(props){
//       super(props)
//       console.log(props)
//       this.name = props.info.name
//       this.costfor2 = props.info.costfor2
//       this.cuisines = props.info.cuisines
//       this.rating = props.info.rating
//       this.reviews = props.info.reviews
//     }



//     render(){
//         return(
//                 <div>
//                     <div class="row">
//   <div class="col-sm-6">
//     <div class="card">
//       <img src=""/>
//       <div class="card-body">
//     <h5 class="card-title">{this.name}</h5>
//     <p class="card-text">{this.cuisines}</p>
//     <p class="card-text">Cost for Two {this.costfor2}</p>
//     <p class="badge badge-pill-success float-right">{this.rating}</p>
//     <p class="card-text">{this.reviews}</p>


//       </div>
//     </div>
//   </div>
//   </div>
//                 </div>
//         )
//     }
// }

const RestaurantDetails = (props) => {
  console.log(props)
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <img style={{ width: "250px" }} src="https://images.pexels.com/photos/2225577/pexels-photo-2225577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
              <p className="card-text">{this.props.cuisines}</p>
              <p className="card-text">Cost for Two {this.props.costfor2}</p>
              <p className="badge badge-pill-success float-right">{this.props.rating}</p>
              <p className="card-text">{this.props.reviews}</p>

            </div>
          </div>
        </div>
      </div>
        </div>
  )
}
export default RestaurantDetails 