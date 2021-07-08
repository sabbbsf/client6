import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BiEdit } from 'react-icons/bi';


const EditTrainingParticipant = (props) => {
  const [open, setOpen] = useState(false);
  const [trainingParticipant, setTrainingParticipant] = useState({id: '', name: '', empId: '', emailId: '', tent: ''});

  const handleClickOpen = () => {
    setTrainingParticipant({id: props.trainingParticipant.id, name: props.trainingParticipant.name, empId: props.trainingParticipant.empId, emailId: props.trainingParticipant.emailId,
      tent: props.trainingParticipant.tent })
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTrainingParticipant({...trainingParticipant, [event.target.name]: event.target.value});
  }

  // Update Training Participant and close modal form
  const handleSave = () => {
	  console.log('Training Participant id is : ' + props.trainingParticipant.id);
    props.updateTrainingParticipant(trainingParticipant, props.trainingParticipant.id);
    handleClose();
  }

  return (
    <div>
      <BiEdit onClick={handleClickOpen}>Edit</BiEdit>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Training Participants</DialogTitle>
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

export default EditTrainingParticipant;