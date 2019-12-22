import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  drawerWidth: {
    width: 240
  }
}));

function DrawerMenu() {
  const classes = useStyles();

  return (
    <div>
      <nav>
        <Drawer
          classes={{
            paper: classes.drawerWidth
          }}
          open
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              Inbox
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              Starred
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              Send Mail
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              Drafts
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              All Mail
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              Spam
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              Trash
            </ListItem>
          </List>
        </Drawer>
      </nav>
    </div>
  );
}

export default DrawerMenu;
