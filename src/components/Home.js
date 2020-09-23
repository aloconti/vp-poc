import React from 'react';
import { connect } from 'react-redux';
import Day from './Day'

function Home(props) {

    return (
      <div style={{width: '100%', marginTop: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' , alignItems: 'center'}}>
      <h1 style={{margin: '20px auto'}}>Bine ai venit!</h1>
      <h2 style={{fontWeight: '300'}}>Gasesti mai jos orarul pentru ziua de astazi</h2>
      <div style={{width: '100%',display: 'flex', justifyContent: 'center'}}>
        {['Miercuri'].map((day, index) => <Day day={day} {...props} isToday={true} dayIndex={index+2} key={index+2} weekIndex={0} width={'30%'}/>)}
        </div>
      </div>
    );
  }

  
function mapStateToProps(state) {
    return {
        all: state.all
    }
  }
  
  export default connect(mapStateToProps)(Home);