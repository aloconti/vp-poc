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
import { _save, _delete } from '../utils/localStorage';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  button: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
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

  const handleMeeting = (type) => {
    const liveData = {
      day: props.day,
      month: props.month,
      course: props.course
    };
    type.toUpperCase() === 'STORE' ? _save('live', liveData) : _delete('live', liveData);
    props.dispatch({
          type: type.toUpperCase()+"_LIVE",
          live: liveData
      });
  };
  let isLive = props.all.live.length > 0 && props.all.live.find(course => course.day == props.day && course.month == props.month && course.course == props.title)

  const Buttons = () => (
    <div className={classes.button}>
      <Button 
        variant="contained" 
        color="secondary" 
        disableElevation 
        style={{fontSize: '1.5em', borderRadius: '50px', width: '100%'}} 
        disabled={isLive}
        onClick={() => handleMeeting('STORE')}>
        {isLive ? 'Meeting Started' : 'Start Meeting'}
      </Button>
      <Button 
        variant="contained" 
        color="secondary" 
        disableElevation 
        style={{fontSize: '1em', borderRadius: '50px'}} 
        disabled={!isLive}
        onClick={() => handleMeeting('STOP')}>
        {isLive ? 'Stop Meeting' : 'Meeting Not Started'}
      </Button>
      <Button color="primary">Play recording</Button>
    </div>
  )

  return (
    <Dialog fullWidth onClose={handleClose} aria-labelledby="max-width-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" style={{textAlign: 'center'}}>{props.course}</DialogTitle>
      {Buttons()}
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