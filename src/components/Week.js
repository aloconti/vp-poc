import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Day from './Day';

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    week: {
        
      display: 'flex',
      justifyContent: 'space-evenly',
      marginBottom: "10px",
    },
  }));

export default function Week(props) {


      const classes = useStyles();
    return(
            <div className={classes.week}>
                {['Luni','Marti','Miercuri','Joi','Vineri'].map(day => <Day day={day} />)}
            </div>
    )
}