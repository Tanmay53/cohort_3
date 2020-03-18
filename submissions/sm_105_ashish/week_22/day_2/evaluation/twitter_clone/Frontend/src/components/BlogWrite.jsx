import React,{useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom';
import {addBlog,getBlog} from "../redux/BlogAction"

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

 const BlogWrite =  (props) => {
  const classes = useStyles();
  const [content , setContent] = useState('')

  

  const postData =  async() => {
    const url = "http://127.0.0.1:5000/auth/tweet"
    const token = props.token
    const payload = {
      content:content,
    }

   await props.addBlog(url,payload,token)
    setContent('')
    props.getBlog(url,token)
  }


  if(props.token){
  return (
        <div className="container mx-auto my-4 bg-info">
            <Card className={classes.root} classes="bg-info">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                 Whats happening.
                </Typography>
                <textarea type="text" className="form-control" placeholder="Whats happening." onChange={(e)=>setContent(e.target.value)} value={content} style={{height:"200px"}}/>
            </CardContent>
            <CardActions className="justify-content-center">
                <Button size="small" className="btn" style={{background:"#1F91DA"}} onClick={()=>postData()} >Tweet</Button>
            </CardActions>
            </Card>
        </div>  
  );
  }
  else{
    return (<Redirect to="/" />)
  }
}

const mapStateToProps = (state) => ({
    ...state,
    token:state.commonReducer.token,
    user:state.commonReducer.user,
})

const mapDispatchToProps = dispatch => ({
    addBlog : (url,payload,token) =>dispatch(addBlog(url,payload,token)),
    getBlog : (url,payload) =>dispatch(getBlog(url,payload))
})

export default connect (mapStateToProps,mapDispatchToProps)(BlogWrite)