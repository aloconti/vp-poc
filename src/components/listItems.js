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

export const mainListItems = (
  <div>
    <ListItem button onClick={() => console.log('Home')}>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Acasa" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Orar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideoIcon />
      </ListItemIcon>
      <ListItemText primary="Inregistrari cursuri" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Raport prezente" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Materiale de curs" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Contul meu</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Date personale" />
    </ListItem>
    <ListItem button>
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
);