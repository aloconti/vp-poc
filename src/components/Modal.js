import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { connect } from 'react-redux';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  button: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    width: '50%',
    margin: '0 auto',
    height: '200px'
  },
});

function Modal(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog fullWidth onClose={handleClose} aria-labelledby="max-width-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" style={{textAlign: 'center'}}>{props.course}</DialogTitle>
      <div className={classes.button}>
        <Button variant="contained" color="secondary" disableElevation style={{fontSize: '1.5em'}} onClick={() => props.dispatch({
                type: "STORE_LIVE",
                live: {
                  day: props.day,
                  month: props.month,
                  course: props.course
                }
            })}>
          Join Meeting
        </Button>
        <Button variant="contained" color="secondary" disableElevation style={{fontSize: '1.5em'}} onClick={() => props.dispatch({
                type: "STOP_LIVE",
                live: {
                  day: props.day,
                  month: props.month,
                  course: props.course
                }
            })}>
          Stop Meeting
        </Button>
        <Button color="primary">Play recording</Button>
      </div>
    </Dialog>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


function mapStateToProps(state) {
  return {
      all: state.all
  }
}

export default connect(mapStateToProps)(Modal);