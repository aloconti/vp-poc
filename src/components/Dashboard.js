import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { MainListItems, SecondaryListItems } from './listItems';
import Calendar from './Calendar';
import Home from './Home';
import Recordings from './Recordings';
import Reports from './Reports';
import Materials from './Materials';
import { connect } from 'react-redux';
import Loading from './Loading';
import Profile from './Profile';
import Settings from './Settings';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      UNEFS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBarColorPrimary: {
    backgroundColor: '#172f71',
  },
  appBarColorSecondary: {
    backgroundColor: '#172f71',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  university: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    fontWeight: '300',
  },
  Sidemenu: {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit',
    justifyContent: 'space-between',
  }
}));

function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [view, setView] = React.useState('home');
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const content = () => {
    if(loading){
      return <Loading />
    } else {
      return (
        <>
        {view === 'home' && <Home />}
        {view === 'calendar' && <Calendar />}
        {view === 'recording' && <Recordings />}
        {view === 'report' && <Reports />}
        {view === 'material' && <Materials />}
        {view === 'profile' && <Profile />}
        {view === 'settings' && <Settings />}
        </>
      )
    }
  }

  const logout = () => props.dispatch({
      type: "STORE_LOGGED",
      logged: false
  })
  

const changeView = (view) => {
  setLoading(true);
  // props.dispatch({
  //   type: "CHANGE_VIEW",
  //   view: view
  // })
  setView(view)
  setLoading(false);
};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift, props.all.elevation === 1 ? classes.appBarColorSecondary : classes.appBarColorPrimary)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          <div className={classes.university}>
            {/* <img style={{width: "40px", marginRight: "10px"}} src="https://unefsb.ro/wp-content/uploads/2016/08/cropped-stema-unefs-512.png"/> */}
          Universitatea Națională de Educație Fizică și Sport 
          </div>
          Platformă de Învățământ la Distanță
          </Typography>
          <IconButton color="inherit">
          <img style={{width: "40px", marginRight: "10px"}} src="https://unefsb.ro/wp-content/uploads/2016/08/cropped-stema-unefs-512.png"/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
        <Typography component="h6" variant="h6" color="inherit" noWrap className={classes.title}>
            {props.all.elevation === 0 ? "ADMIN" : props.all.elevation === 1 ? "Profesor" : "Student"}
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.Sidemenu}>
        <List><MainListItems changeView={changeView}/></List>
        <List><SecondaryListItems changeView={changeView} logout={logout}/></List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} style={{width: "100%"}}>
            {/* Chart */}
            {content()}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}



function mapStateToProps(state) {
  return {
      all: state.all
  }
}

export default connect(mapStateToProps)(Dashboard);