import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddTrainingParticipant = (props) => {
  const [open, setOpen] = useState(false);
  const [trainingParticipant, setTrainingParticipant] = useState({id: '', name: '', empId: '', emailId: '', tent: ''});


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTrainingParticipant({...trainingParticipant, [event.target.name]: event.target.value});
  }

  // Save project and close modal form
  const handleSave = () => {
    props.addTrainingParticipant(trainingParticipant);
    handleClose();
  }
  


  return (
    <div>
      <button style={{margin: 10}} onClick={handleClickOpen}>New Training Participant</button>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Training Participant</DialogTitle>
          <DialogContent>		  
			<input type="text" placeholder="Name" name="name" 
              value={trainingParticipant.name} onChange={handleChange}/><br/> 
            <input type="text" placeholder="EmployeeId" name="empId" 
              value={trainingParticipant.empId} onChange={handleChange}/><br/>
            <input type="text" placeholder="EmailId" name="emailId" 
              value={trainingParticipant.emailId} onChange={handleChange}/><br/>
            <input type="text" placeholder="Tent" name="tent" 
              value={trainingParticipant.tent} onChange={handleChange}/><br/>				  			  
          </DialogContent>
          <DialogActions>
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleSave}>Save</button>
          </DialogActions>
        </Dialog>      
    </div>
  );
};

export default AddTrainingParticipant;