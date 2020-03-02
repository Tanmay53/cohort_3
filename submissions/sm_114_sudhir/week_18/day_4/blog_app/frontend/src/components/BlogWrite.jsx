import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux"

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
  return (
      <div>
        <div className="container mx-auto my-4">
            <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                 Write your blog here.
                </Typography>
                <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>  
    </div>     
  );
}

const mapStateToProps = (state) => ({
    ...state,
    user:state.user
})

const mapDispatchToProps = {
    
}

export default connect (mapStateToProps,mapDispatchToProps)(BlogWrite)