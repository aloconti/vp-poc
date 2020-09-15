import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Week from './Week';

const weeks = [
    "5 OCT - 9 OCT",
    "12 OCT - 16 OCT",
    "19 OCT - 23 OCT",
    "26 OCT - 30 OCT",
    "2 NOV - 6 NOV",
    "9 NOV - 13 NOV",
]

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

export default function Calendar(props) {

    const classes = useStyles();
    return(
        <>
            {weeks.map((week, index) =>(
                <div className={classes.root}>
            <Typography className={classes.week}>{`WEEK ${index+1} (${week})`}</Typography>
            <Week/>
            </div>)
            )}
        </>
    )
}