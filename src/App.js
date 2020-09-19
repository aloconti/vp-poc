import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux';

const App = (props) => (
  <div className="App">
    {!props.all.logged ? <Login /> : <Dashboard />}
  </div>
);

function mapStateToProps(state) {
  return {
      all: state.all
  }
}

export default connect(mapStateToProps)(App);
