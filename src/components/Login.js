import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '440px',
    margin: '0 auto'
  },
  formControl: {
    margin: '8px auto',
    minWidth: 120,
    width: '440px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  avatar: {
    margin: theme.spacing(1),
    width: '80px',
    height: '80px'
  },
  avatarStudent: {
    backgroundColor: theme.palette.primary.light,
  },
  avatarProfesor: {
    backgroundColor: theme.palette.secondary.main,
  },
  avatarAdmin: {
    backgroundColor: theme.palette.primary.dark,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  university: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: '300',
    marginTop: '40px'
  },
}));

function Login(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.dispatch({
      type: "STORE_ELEVATION",
      elevation: event.target.value
  })
  };
  
  return (
    <Container component="main" maxWidth="lg" >
      <CssBaseline />
      
      <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          <div className={classes.university}>
            {/* <img style={{width: "40px", marginRight: "10px"}} src="https://unefsb.ro/wp-content/uploads/2016/08/cropped-stema-unefs-512.png"/> */}
          Universitatea Națională de Educație Fizică și Sport 
          </div>
          Platformă de Învățământ la Distanță
          </Typography>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <img style={{width: "80px"}} src="https://unefsb.ro/wp-content/uploads/2016/08/cropped-stema-unefs-512.png"/> 
        </Avatar>
        <Typography component="h1" variant="h5">
          Autentificare{props.all.elevation === 0 ? 'ADMIN ' : props.all.elevation === 1 ? ' Profesor' : ' Student'}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Parola"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Pastreaza autentificarea"
          />
          <Button
            // type="submit"
            onClick={() => props.dispatch({
                type: "STORE_LOGGED",
                logged: true
            })}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Autentificare
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Ai uitat parola?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Inregistrare"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Tip Utilizator</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.all.elevation}
          onChange={handleChange}
        >
          <MenuItem value={2}>Student</MenuItem>
          <MenuItem value={1}>Profesor</MenuItem>
          <MenuItem value={0}>Admin</MenuItem>
        </Select>
      </FormControl>
        <Copyright />
      </Box>
    </Container>
  );
}


function mapStateToProps(state) {
    return {
        all: state.all
    }
}

export default connect(mapStateToProps)(Login);