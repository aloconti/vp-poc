import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PlayIcon from '@material-ui/icons/Attachment';
import VideoIcon from '@material-ui/icons/Description';
import { Divider } from '@material-ui/core';
import AddModal from './AddModal';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    marginBottom: '20px',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function MNestedList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Materiale suport curs
        </ListSubheader>
      }
      className={classes.root}
    >
    <Divider/>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <VideoIcon />
        </ListItemIcon>
        <ListItemText primary={props.course} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={() => setShow(true)}>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText primary="Saptamana 1" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => setShow(true)}>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText primary="Saptamana 2" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => setShow(true)}>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText primary="Saptamana 3" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => setShow(true)}>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText primary="Saptamana 4" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => setShow(true)}>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText primary="Saptamana 5" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={() => setShow(true)}>
            <ListItemIcon>
              <PlayIcon />
            </ListItemIcon>
            <ListItemText primary="Saptamana 6" />
          </ListItem>
        </List>
      </Collapse>
      <AddModal selectedValue={'selectedValue'} open={show} onClose={() => setShow(false)}  />
    </List>
  );
}

export default function Materials(props) {
    return(
        <>
        <h1 style={{margin: '20px auto'}}>Materiale</h1>
        {['Fotbal', 'Baschet', 'Handbal', 'Tenis de camp', 'Atletism', 'Volei'].map((item, index) => (
            <MNestedList course={item} key={index} />
        ))}
        </>
    )
}