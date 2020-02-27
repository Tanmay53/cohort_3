import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    fontWeight:"bold",
    textAlign:"center"
  },
  pos: {
    marginBottom: 12,
  },
});

function BlogWrite(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  if(props.token!=''){
  return (
      <div>
        <div className="container mx-auto my-4">
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                 Write your blog here.
                </Typography>
                <select className="form-control">
                  <option disabled selected>Select your category</option>
                
                </select>
                <div className="row">
                <input placeholder="Add new Categories" className="col-3 form-control mx-3 my-auto"/>
                <button className="btn btn-secondary col-2">Add</button>
                </div>

               <input className="form-control my-4" placeholder="add title for your blog"/>
                <Typography className={classes.title} color="textSecondary">
                Content
                </Typography>
                <textarea type="text" className="form-control" style={{height:"200px"}}/>
            </CardContent>
            <CardActions className="justify-content-center">
                <Button size="small" className="btn btn-success">Post</Button>
            </CardActions>
            </Card>
        </div>  
    </div>     
  );
  }
  else{
    return (<Redirect to="/auth/login" />)
  }
}

const mapStateToProps = (state) => ({
    ...state,
    user:state.user
})

const mapDispatchToProps = {
    
}

export default connect (mapStateToProps,mapDispatchToProps)(BlogWrite)