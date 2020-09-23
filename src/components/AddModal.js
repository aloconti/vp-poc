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
import Fab from '@material-ui/core/Fab';

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
  content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '40px'

  }
});

function AddModal(props) {
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


  return (
    <Dialog fullWidth onClose={handleClose} aria-labelledby="max-width-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" style={{textAlign: 'center'}}>{props.course}</DialogTitle>
      <div className={classes.content}>
          <h3 style={{fontWeight: '300', textAlign: 'center', marginBottom: '40px'}}>Nici un fisier adaugat.<br/>
          Folositi butonul de mai jos pentru a adauga fisiere</h3>
          <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </div>
    </Dialog>
  );
}

AddModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


function mapStateToProps(state) {
  return {
      all: state.all
  }
}

export default connect(mapStateToProps)(AddModal);