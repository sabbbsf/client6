import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TrainingParticipantList from './components/TrainingParticipants';

function App() {
 return (
 <div>
 <div className="App">
 <AppBar position="static" color="default">
 <Toolbar>
 <Typography variant="h6" color="inherit">
 TrainingParticipantList
 </Typography>
 </Toolbar>
 </AppBar>
 <TrainingParticipantList/>
  </div>
    </div>

 );
}

export default App;
