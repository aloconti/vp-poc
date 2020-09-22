import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50%',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
          <h4>Date personale</h4>
        <TextField
          id="standard-read-only-input"
          label="Nume"
          defaultValue="Popescu"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-read-only-input"
          label="Prenume"
          defaultValue="Andrei"
          InputProps={{
            readOnly: true,
          }}
        />
        <br/>
        <TextField
            id="date"
            label="Data nasterii"
            type="date"
            defaultValue="1992-05-24"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        <TextField
          id="standard-read-only-input"
          label="Serie si Numar CI"
          defaultValue="RR 188875"
          InputProps={{
            readOnly: true,
          }}
        />
        <br/>
        <br/>
        <br/>
          <h4>Date student</h4>
        <TextField
          id="standard-read-only-input"
          label="An de studiu"
          defaultValue="2"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-read-only-input"
          label="Grupa"
          defaultValue="442D"
          InputProps={{
            readOnly: true,
          }}
        />
        <br/>
        <br/>
        <br/>
          <h4>Schimbare parola</h4>
        <TextField
          id="standard-password-input"
          label="Parola noua"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="standard-password-input"
          label="Repeta parola noua"
          type="password"
          autoComplete="current-password"
        />
      
    </form>
  );
}