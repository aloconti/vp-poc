import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Modal from './Modal';
import AlarmIcon from '@material-ui/icons/OndemandVideo';
import { connect } from 'react-redux';
import {_load} from '../utils/localStorage'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  live: {
      fill: 'red',
  }
}));


class Course extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            live: [...this.props.all.live]
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.all.live.length !== this.state.live.length) {
            this.setState({live: [...this.props.all.live]})
        }
    }

//   classes = useStyles();
  handleClickOpen = () => {
    this.setState({open: true})
  };

  modalProps = {
      ...this.props,
      day: this.props.all.weeks[this.props.weekIndex].startDate.getDate() + this.props.dayIndex,
      month: this.props.all.weeks[this.props.weekIndex].startDate.getMonth() + 1,
      course: this.props.title
  }

  hoursArr = [
    '09:00',
    '11:00',
    '13:00',
    '15:00',
    '16:00',
  ]

  title = () => {
    return <div><span style={{fontSize: '14px', fontWeight: '300'}}>{this.hoursArr[this.props.index]}</span><span style={{marginLeft: '20px'}}>{this.props.title}</span></div>
  }

  handleClose = (value) => {
    this.setState({open: false})
  };
  render(){
    let isLive = this.props.all.live.length == this.state.live.length && this.props.isToday && this.props.all.live.find(course => course.day == this.modalProps.day && course.month == this.modalProps.month && course.course == this.props.title)
    let lives = _load('live');
    let isLocalLive = lives.length && this.props.isToday && lives.find(course => course.day == this.modalProps.day && course.month == this.modalProps.month && course.course == this.props.title && course.hour == this.hoursArr[this.props.index])
    console.log(lives.find(course => course.day == this.modalProps.day && course.month == this.modalProps.month && course.course == this.props.title && course.hour == this.hoursArr[this.props.index]))
    return (
        <ListItem button>
          {/* <ListItemIcon>
            <InboxIcon />
          </ListItemIcon> */}
          <ListItemText primary={this.title()} onClick={this.handleClickOpen} />{isLocalLive ? <AlarmIcon style={{fill: 'red'}} /> : null}
          <Modal selectedValue={'selectedValue'} hour={this.hoursArr[this.props.index]} course={this.props.title} open={this.state.open} onClose={this.handleClose} isLive {...this.modalProps} />
        </ListItem>
  );
  }
  
}



function mapStateToProps(state) {
    return {
        all: state.all
    }
  }
  
  export default connect(mapStateToProps)(Course);