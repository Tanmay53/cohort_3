import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from '../../Route/Navbar'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AddToCart from '../../Redux/action'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catFilter: "All",
      total: ""
    };
  }
 

 
  handleAddToCart=(id)=>{
   this.props.addtocart(id)
    this.props.history.push("/confirm")
  }
  render() {

    //console.log(this.props.login)
    //console.log(this.props.maindata)
    console.log(this.props.ordersPlaced)
    if(this.props.login){
      return (
           <div>
                 <Navbar/>
              <button className="float-right p-2 border border-dark bg-success" onClick={this.handleLogout}> LOGOUT</button>
             <br></br>
             
              <div className="col-3 float-right"> 
                   <img src="data:image/jpeg;base64,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" style={{width:"300px",height:"300px"}} alt="imgg"/>
               </div>
              <div className="col-9">
                <div className="row">
              {this.props.maindata.map(e => {
                      return (
                        <div
                          key={e.id}
                          className="col-4 d-flex justify-content-around "
                        >
                          <Card className="m-3 " style={{ width: "300px" }}>
                            <CardActionArea>
                              <Link to={`/${e.id}`}>
                                <CardMedia
                                  style={{ height: "270px", width: "300px" }}
                                  component="img"
                                  image={e.img}
                                />
                                <CardContent>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                  >
                                    {e.name}
                                  </Typography>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                  >
                                    Rs.{e.price}
                                  </Typography>
                                </CardContent>
                              </Link>
                            </CardActionArea>
                            <CardActions>
                              <Button
                                style={{ width: "300px" }}
                                onClick={() => this.handleAddToCart(e.id)}
                                variant="contained"
                                color="primary"
                              >
                                BOOK THIS ROOM
                              </Button>
                            </CardActions>
                          </Card>
                        </div>
                      );
                    })}
                    </div>
              </div>
           </div>
      
      
      )
    }
    else {
      return <Redirect to="/login" />;
    }
  
 
}
}

const mapStateToProps = state => ({
  login: state.login,
  maindata:state.maindata,
  ordersPlaced:state.ordersPlaced

});
const mapDispatchToProps = dispatch => ({
  addtocart: payload => dispatch(AddToCart(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);



