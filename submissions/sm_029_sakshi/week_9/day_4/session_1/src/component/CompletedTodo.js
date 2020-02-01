import React from 'react'
import { Box, Grid  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '400px',
      border: '1px solid black',
      padding: '5px'
    },
  });

function CompletedTodo(props) {
    console.log(props.data);
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                {props.label}
                {props.data.map(itemName => (
                <Box className={classes.root} key={itemName.id}>{itemName.name}</Box>
                ))}
          </Grid>
        </Grid>
      
    );
  }

  export default CompletedTodo
