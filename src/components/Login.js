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
        Your Website
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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  avatar: {
    margin: theme.spacing(1),
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
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">User type</InputLabel>
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
      <div className={classes.paper}>
        <Avatar className={clsx(classes.avatar && props.all.elevation === 0 ? classes.avatarAdmin : props.all.elevation === 1 ? classes.avatarProfesor : classes.avatarStudent)}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.all.elevation === 0 ? 'ADMIN ' : props.all.elevation === 1 ? 'Professor ' : 'Student '}Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
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
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
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