import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  const [loginView, setLoginView] = useState(true);
  const [dashboardView, setDashboardView] = useState(!loginView);
  const [elevation, setElevation] = useState(false);

  const step1 = val => {
    setLoginView(false)
    setDashboardView(true);
  }

  return (
    <div className="App">
      {loginView && <Login step1={step1} show={loginView} elevation={elevation} setElevation={setElevation} />}
      {dashboardView && <Dashboard step1={step1} show={dashboardView} elevation={elevation} setElevation={setElevation}/>}
    </div>
  );
}

export default App;
