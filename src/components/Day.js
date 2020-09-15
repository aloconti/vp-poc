import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Course from './Course';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '18%',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      width: '50px',
      padding: '5px 1px',
      justifyContent: "center",
      '& > *': {
      //   margin: theme.spacing(1),
      //   height: theme.spacing(16),
      },
    },
  day: {
      fontSize: '1em',
      width: '30px',
      margin: '0 auto',
  },
  month: {
      fontSize: '0.75em',
      width: '30px',
      margin: '0 auto',
  },
  header: {
      display: 'flex',
      alignItems: 'center',
  },
  weekday: {
      paddingLeft: '16px',
      width: '60%',
  }
}));


export default function Day(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <div className={classes.header}>
            <Paper className={classes.paper}>
                <Typography className={classes.day}>28</Typography>
                <Typography className={classes.month}>JUL</Typography>
            </Paper>
            <Typography className={classes.weekday} variant="h5" component="h2">
            {props.day}
            </Typography>
        </div>
        
        <List component="nav" aria-label="main mailbox folders">
            {['Fotbal', 'Baschet', 'Handbal'].map(item => <Course title={item}/>)}
        </List>
      </CardContent>
    </Card>
  );
}