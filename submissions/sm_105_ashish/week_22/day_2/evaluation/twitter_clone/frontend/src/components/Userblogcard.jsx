import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux"
import {getBlog} from "../redux/BlogAction"

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
});

 function ImgMediaCard(props) {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}  key={props.data.id}>
      <CardActionArea>
      <img className="card-img-top" style={{width:"40px",height:"40px"}} src={props.data.imgurl} alt="Card image cap" />
      </CardActionArea>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.content}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
        <div size="small" color="primary">
          {props.data.created_on}
        </div>
        <div size="small" color="primary">
          creator:{props.data.name}
        </div>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  ...state,
  token:state.commonReducer.token,
  tweets:state.blogReducer.tweets,
  user:state.commonReducer.user
})

const mapDispatchToProps = dispatch => ({
  getBlog:(url,payload)=>dispatch(getBlog(url.payload))
})


export default connect (mapStateToProps,mapDispatchToProps) (ImgMediaCard)