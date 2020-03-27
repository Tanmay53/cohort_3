import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import {signOut} from "../redux/Action"
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

 function SideNavPage(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={
        toggleDrawer(side, false)
        
      }
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
      <img  className="mx-auto" style={{width:"150px",borderRadius:"80px"}} src={props.user.imgurl} alt="prf"/>
      </ListItem>
  <ListItem>Name: {props.user.name}</ListItem>
  <ListItem>Email id: {props.user.email}</ListItem>

      </List>
      <Divider/>
      <List>
      <ListItem>
          <Link className="btn btn-info" to="/user">Home</Link>
        </ListItem>
        <ListItem>
          <Link className="btn btn-info" to="/user/allUsers">All users</Link>
        </ListItem>
      <ListItem>
          <Link className="btn btn-info" to="/user/Edit">Upload profile Pic</Link>
          </ListItem>
        <ListItem>
          <Link to="/user/mytweets" className="btn btn-info">Profile</Link>
          </ListItem>
          <ListItem>
          <Link to="/user/newtweet" className="btn btn-info">Tweet</Link>
          </ListItem>
          <ListItem>
          <button onClick={()=>props.signOut()} className="btn btn-danger">Log out</button>
          </ListItem>
     
      </List>
    </div>
  );
  return (
    <div>
      <Button onClick={toggleDrawer('left', true)} className="btn btn-secondary my-4 ml-4">User Profile</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user:state.commonReducer.user
})

const mapDispatchToProps = dispatch=> ({
  signOut :()=>dispatch(signOut())
  
})


export default connect (mapStateToProps,mapDispatchToProps)(SideNavPage)

