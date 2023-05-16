import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
  width: '100%',
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
},
}));

export default function Divider() {
const classes = useStyles();

return (
<List component="nav" className={classes.root} aria-label="mailbox 
folders">

 <Divider>Or</Divider>

 </List>
 );
}