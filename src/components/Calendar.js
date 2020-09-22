import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Week from './Week';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    week: {
        
      display: 'flex',
      justifyContent: 'space-evenly',
      marginBottom: "10px",
      paddingTop: "20px"
    },
  }));

function Calendar(props) {

    const classes = useStyles();
    return(
        <>
            {props.all.weeks && props.all.weeks.map((week, index) =>(
                <div className={classes.root} key={index}>
            <Typography className={classes.week}>{week.startDate && 
            `WEEK ${week.weekNo} (${week.startDate.getDate()} ${week.startDate.toLocaleString('default', { month: 'short' }).toUpperCase()} - ${week.endDate.getDate()} ${week.endDate.toLocaleString('default', { month: 'short' }).toUpperCase()})`
            }</Typography>
            <Week {...props} weekIndex={index}/>
            </div>)
            )}
        </>
    )
}

function mapStateToProps(state) {
    return {
        all: state.all
    }
  }
  
  export default connect(mapStateToProps)(Calendar);