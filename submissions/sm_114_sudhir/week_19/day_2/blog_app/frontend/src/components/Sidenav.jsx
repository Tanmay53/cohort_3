import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideNavPage(props) {
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
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
      <img  className="ml-4" src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=200&q=80" alt="prf"/>
      </ListItem>
  <ListItem>Name: {props.user.name}</ListItem>
  <ListItem>Email id: {props.user.email}</ListItem>

      </List>
      <Divider />
      <List>
      <ListItem>
          <button className="btn btn-secondary" onClick={()=>alert("hello")}>Edit Your profile</button>
          </ListItem>
        <ListItem>
          <button className="btn btn-secondary" onClick={()=>alert("hello")}>Your Blogs</button>
          </ListItem>
          <ListItem>
          <button className="btn btn-secondary" onClick={()=>alert("hello")}>Your Favourite</button>
          </ListItem>
          <ListItem>
          <Link to="/user/newblog" className="btn btn-secondary">Write Your Blog</Link>
          </ListItem>
     
      </List>
    </div>
  );
  return (
    <div>
      <Button onClick={toggleDrawer('left', true)} className="btn btn-secondary ml-4">User Profile</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}


// {['Inbox'].map((text, index) => (
//   <ListItem button key={text}>
//     {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}</ListItemIcon> */}
//     <ListItemText primary={text} />
//   </ListItem>
// ))}