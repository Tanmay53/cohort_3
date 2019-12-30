import React from "react"
import Cards from "./Cards"

class Web extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            nav:["IMAX", "4dX ","Play House" ,"GOLD" ,"P[Xl]", "ONYX", "Director's Cut","D-box"],
            nav2:["Vkaao", "Magazine ","Cineas" ,"Offers" ,"Adventures", "Giftcards", "Bulk Bookings"],
            cardrow1 :[{
                img:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00015430.jpg",
                title:"GOOD NEWWZ",
                language:"HINDI",
                certified:"(U/A)",
                genre:"COMEDY"
            },{
                img:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00010731.jpg",
                title:"GOOD NEWWZ",
                language:"HINDI",
                certified:"(U/A)",
                genre:"COMEDY"
            },{
                img:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00016474.jpg",
                title:"GOOD NEWWZ",
                language:"HINDI",
                certified:"(U/A)",
                genre:"COMEDY"
            },{
                img:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00015729.jpg",
                title:"GOOD NEWWZ",
                language:"HINDI",
                certified:"(U/A)",
                genre:"COMEDY"
            },{
                img:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00016653.jpg",
                title:"GOOD NEWWZ",
                language:"HINDI",
                certified:"(U/A)",
                genre:"COMEDY"
            },{
                img:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00015426.jpg",
                title:"GOOD NEWWZ",
                language:"HINDI",
                certified:"(U/A)",
                genre:"COMEDY"
            },{
                img:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00016655.jpg",
                title:"GOOD NEWWZ",
                language:"HINDI",
                certified:"(U/A)",
                genre:"COMEDY"
            },{
                img:"https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00016581.jpg",
                title:"GOOD NEWWZ",
                language:"HINDI",
                certified:"(U/A)",
                genre:"COMEDY"
            }

        ]

        }
    }
    render(){
        return(
            <div className="page">
                <div className="row text-white" style={{background:"#1b1b1b"}}>
                    <div className ="col-lg-1 img-fluid"><img  className="img-fluid" src ="https://www.pvrcinemas.com/assets/images/new_logo.png"/></div>
                    <div className="col-lg-10">
                    <div className= "row">
                        <input className="col-9 m-2 p-2 navIn" placeholder="Search movies or theatres......."></input>
                        <input className="col-2 m-2 p-2 navIn" placeholder="Location"></input>
                    </div>
                    <div className="row">
                        <div className="col-4">
                        <div className="row">
                            {this.state.nav.map((ele)=><div className="m-1">{ele}</div>)}
                        </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-5">
                        <div className="row">
                            {this.state.nav2.map((ele)=><div className="m-1">{ele}</div>)}
                        </div>
                        </div>
                    </div>

                    </div>
                    <div className="col-lg-1"></div>
                </div>
                <div className ="slider">
                        
                    </div>
                    
                    <div className="container my-5">
                        <div className= "row sliderdown ">
                            <div className= "col-8 py-5">
                            <h1 style={{color:"white"}}>Introducing an exclusive loyalty program that pays you back!</h1>
                            <div className= "row">
                                <button className="btn btn-light m-2">KNOW MORE</button><button className="btn btn-dark m-2">ALREADY A MEMBER</button>
                            </div>
                            </div>
                            <div className= "col-4">
                                    <img src="https://www.pvrcinemas.com/assets/images/companies/herologo-pvr.png"/>
                            </div>
                        </div>
                    </div>
                    <div className= "container">
                        <Cards data ={this.state.cardrow1}/>
                    </div>

            </div>
        )
    }
}
export default Web