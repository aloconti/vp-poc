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
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    width: '18%',
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
  },
  today: {
      border: '3px solid red',
  }
}));


export default function Day(props) {
  const classes = useStyles();

  const isToday = (
      props.all.weeks[props.weekIndex].startDate.getDate() + props.dayIndex == new Date().getDate() &&
      props.all.weeks[props.weekIndex].startDate.getMonth() == new Date().getMonth()
   )

const showDate = (input) => {
    let day, month;
    if(props.all.weeks[props.weekIndex].startDate.getDate() + props.dayIndex > 30){
        day = (props.all.weeks[props.weekIndex].startDate.getDate() + props.dayIndex) % 30;
        month = 'OCT'
    } else {
        day = (props.all.weeks[props.weekIndex].startDate.getDate() + props.dayIndex)
        month = (props.all.weeks[props.weekIndex].startDate).toLocaleString('default', { month: 'short' }).toUpperCase()
    }
    if(input === 'day') return day;
    if(input === 'month') return month;
}

  return (
    <Card className={clsx(classes.root, isToday && classes.today)} style={props.width && {width: props.width}}>
      <CardContent>
      <div className={classes.header}>
            <Paper className={classes.paper}>
                <Typography className={classes.day}>{showDate('day')}</Typography>
                <Typography className={classes.month}>{showDate('month')}</Typography>
            </Paper>
            <Typography className={classes.weekday} variant="h5" component="h2">
            {props.day}
            </Typography>
        </div>
        
        <List component="nav" aria-label="main mailbox folders">
            {props.all.elevation === 1 ? 
            ['Fotbal', 'Fotbal'].map((item, index) => <Course title={item} key={index} index={index} {...props} isToday={isToday} />) : 
            ['Fotbal', 'Baschet', 'Handbal', 'Fotbal'].map((item, index) => <Course title={item} key={index} index={index} {...props} isToday={isToday}/>)}
        </List>
      </CardContent>
    </Card>
  );
}