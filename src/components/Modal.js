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
import { _save, _delete, _load } from '../utils/localStorage';

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
      course: props.course,
      hour: props.hour
    };
    type.toUpperCase() === 'STORE' ? _save('live', liveData) : _delete('live', liveData);
    props.dispatch({
          type: type.toUpperCase()+"_LIVE",
          live: liveData
      });
  };
  let isLive = props.all.live.length > 0 && props.all.live.find(course => course.day == props.day && course.month == props.month && course.course == props.title && course.hour == props.hour)
  let lives = _load('live');
  let isLocalLive = lives.length && props.isToday && lives.find(course => course.day == props.day && course.month == props.month && course.course == props.title && course.hour == props.hour)
  const Buttons = () => (
    <div className={classes.button}>
      <Button 
        variant="contained" 
        color="secondary" 
        disableElevation 
        style={{fontSize: '1.5em', borderRadius: '50px', width: '100%'}} 
        disabled={props.all.elevation === 1 ? isLocalLive : !isLocalLive}
        onClick={() => handleMeeting('STORE')}>
        {isLocalLive 
          ? 
            (props.all.elevation === 1 
              ? 
                'Meeting Started' 
              : 
                <a href={'https://video.kowalski07.party/'+props.course} target="_blank" style={{color: "#fff", textDecoration: 'none'}}>{'Join Meeting'}</a>) 
          : (<a href={'https://video.kowalski07.party/'+props.course} target="_blank" style={{color: "#fff", textDecoration: 'none'}}>{props.all.elevation === 1 ? 'Start Meeting' : 'Meeting not started'}</a>)}
      </Button>
      {props.all.elevation === 1 &&<Button 
        variant="contained" 
        color="secondary" 
        disableElevation 
        style={{fontSize: '1em', borderRadius: '50px'}} 
        disabled={!isLocalLive}
        onClick={() => handleMeeting('STOP')}>
        {isLocalLive ? 'Stop Meeting' : 'Meeting Not Started'}
      </Button>}
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