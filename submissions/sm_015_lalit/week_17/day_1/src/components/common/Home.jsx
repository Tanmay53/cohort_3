import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import uuid from 'uuid-random'


class Home extends React.Component {
 

//   componentDidMount() {
    
   
//   }

  render() {
    return (
      <>
          <div className="row mt-2">
            {this.props.data.map(e => {
              return (
                <Card key={uuid()} className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" }}
                      image={e.url}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                        {e.name}
                      </Typography>
                      <Typography>Floor : {e.floor}</Typography>
                      <Typography>Capacity : {e.capacity} persons</Typography>
                      <Typography>Rs. {e.price}</Typography>
                      <Typography>Availabilty : {e.available}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                    {(e.available=="Yes")?<Link to={`/book?id=${e.id}`}>
                      <Button size="small" color="primary">
                        Book this room
                      </Button>
                    </Link> : <Typography className="text-danger">Already booked</Typography>}
                  </CardActionArea>
                </Card>
              );
            })}
          </div>
        }
      </>
    );
  
}
}
const MapStateToProps=(state)=>{
    return{
        data:state.data
    }
}
// const mapDispatchToProps = {
    
// }


export default connect(MapStateToProps,null)(Home)