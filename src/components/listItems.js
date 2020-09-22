import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
// import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import VideoIcon from '@material-ui/icons/Videocam';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import LogoffIcon from '@material-ui/icons/PowerSettingsNew';

export function MainListItems(props) {
    return(
  <div>
    <ListItem button onClick={() => props.changeView('home')}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Acasa" />
    </ListItem>
    <ListItem button onClick={() => props.changeView('calendar')}>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Orar" />
    </ListItem>
    <ListItem button onClick={() => props.changeView('recording')}>
      <ListItemIcon>
        <VideoIcon />
      </ListItemIcon>
      <ListItemText primary="Inregistrari cursuri" />
    </ListItem>
    <ListItem button onClick={() => props.changeView('report')}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Raport prezente" />
    </ListItem>
    <ListItem button onClick={() => props.changeView('material')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Materiale de curs" />
    </ListItem>
  </div>
)
    }

export function SecondaryListItems(props) {
    return(
  <div>
    <ListSubheader inset>Contul meu</ListSubheader>
    <ListItem button onClick={() => props.changeView('profile')}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Date personale" />
    </ListItem>
    <ListItem button onClick={() => props.changeView('settings')}>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Setari" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LogoffIcon />
      </ListItemIcon>
      <ListItemText primary="Deconectare" />
    </ListItem>
      <hr/>
    <ListItem>
      <ListItemIcon>
      <img style={{width: "25px"}} src="https://unefsb.ro/wp-content/uploads/2016/08/cropped-stema-unefs-512.png"/>
      </ListItemIcon>
      <ListItemText secondary="&copy; UNEFS 2020" />
    </ListItem>
  </div>
)
    }