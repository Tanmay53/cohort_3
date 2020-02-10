import React from "react"

export default class RestaurantDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: this.props
    }
    console.log(this.props)
  }




  render() {
    console.log(this.props.data[1].name)
    // <div className="row my-3">
    // let pomato = this.props.data.map(ele => {
    //   console.log(ele.name, ele.cuisines, ele.rating, ele.costfor2, ele.rating, ele.reviews)
    //   return (
    //     <div>

    //       <div className="container-fluid">
     

    //           <div className="col-3 ">
    //             <img className="" style={{ width: "290px" }} src="https://images.pexels.com/photos/2225577/pexels-photo-2225577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="The Best Restaurant Near You" />
    //           </div>
    //           <hr />

    //           <div className="col-3 ">
    //             <h4 className="text-danger text-center mt-3 font-weight-heavy">{ele.name}</h4>

    //             <p className="badge badge-pill badge-success offset-8">{ele.rating}</p>

    //             <p className="text-secondary">{ele.cuisines}</p>
    //             <p className="text-dark">Cost for Two ₹ {ele.costfor2}</p>

    //             <p className="text-secondary"> Reviews {ele.reviews}</p>
    //           </div>
           

    //         </div>
          
    //     </div>
    //   )
    // })

   

    return (
      <div>
       


        <div className="row my-3">
    {this.props.data.map(ele => {
      console.log(ele.name, ele.cuisines, ele.rating, ele.costfor2, ele.rating, ele.reviews)
      return (
        <div className="col-6 border">

          {/* <div className="col-3"> */}
     
            <div className="row">
              <div className="col-6 ">
                <img className="mt-2" style={{ width: "300px" }} src="https://images.pexels.com/photos/2225577/pexels-photo-2225577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="The Best Restaurant Near You" />
                {/* <hr /> */}
              </div>
              

              <div className="col-6 ">
                <h4 className="text-danger text-center mt-3 font-weight-heavy">{ele.name}</h4>

                <p className="badge badge-pill badge-success offset-8">{ele.rating}</p>

                <p className="text-secondary">{ele.cuisines}</p>
                <p className="text-dark">Cost for Two ₹ {ele.costfor2}</p>

                <p className="text-secondary"> Reviews {ele.reviews}</p>
                <hr/>
              </div>
               

            </div>
          
        </div>
      )
    })
}
</div>


      </div>
    )
  }
}