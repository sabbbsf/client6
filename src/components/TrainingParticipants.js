import React, { Component } from 'react';
import {SERVER_URL} from '../constants.js'
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTrainingParticipant from './AddTrainingParticipant';
import EditTrainingParticipant from './EditTrainingParticipant';
import { MdDelete } from 'react-icons/md';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Row, Button, Col, Form, Card} from "react-bootstrap";


import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";




class TrainingParticipants extends Component {
 

constructor(props) {
 super(props);
 this.state = { name: "TrainingManager", trainingParticipants: [], hide: false };
}

  componentDidMount() {
    this.fetchTrainingParticipants();
  }
  
     // Add new training participant
  addTrainingParticipant(trainingParticipant) {
	console.log('The Training Participant details are' + trainingParticipant)
    fetch(SERVER_URL + 'trainingParticipants', 
      { method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainingParticipant)
      })
    .then(res => this.fetchTrainingParticipants())
    .catch(err => console.error(err))
  }
  
  
  
  // Fetch all Training Participants
  fetchTrainingParticipants = () => {
    console.log("FETCH")
    fetch(SERVER_URL + 'trainingParticipants')
    .then((response) => response.json()) 
    .then((responseData) => {
      console.log('The response from the server for get training participants is : ' + responseData);		
      this.setState({ 
        trainingParticipants: responseData.TrainingParticipants,
      }); 
    })
    .catch(err => console.error(err)); 
  }
  

  // Update Training Participant
  updateTrainingParticipant(trainingParticipant, link) {
    console.log("Inside Update TrainingParticipant" +  link)
    console.log(JSON.stringify(trainingParticipant))

    fetch(SERVER_URL + 'trainingParticipants/' + link, 
    { method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trainingParticipant)
    })
    .then(res => {
      toast.success("Changes saved", {
        position: toast.POSITION.BOTTOM_LEFT
      });
      this.fetchTrainingParticipants();
    })
    .catch(err => 
      toast.error("Error when saving", {
        position: toast.POSITION.BOTTOM_LEFT
      }) 
    )
  }  
  
  

  // Delete Training Participant
  onDelClick = (id) => {
    if (window.confirm('Are you sure to delete?')) {
      fetch(SERVER_URL + 'trainingParticipants/' + id, {method: 'DELETE'})
      .then(res => {
        toast.success("TrainingParticipant deleted", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        this.fetchTrainingParticipants();
      })
      .catch(err => {
        toast.error("Error when deleting", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err)
      }) 
    } 
  }  
 

  

  render() {
    const {hide} = this.state;
      if (hide) {
          return null;
      }
        
		

		
    const columns = [{
      Header: 'ID',
      accessor: 'id'
    },{
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'EmployeeId',
      accessor: 'empId',
    }, {
      Header: 'EmailId',
      accessor: 'emailId',
    }, {
      Header: 'Tent',
      accessor: 'tent',
    },
	{
      sortable: false,
      filterable: false,
      width: 40,      
      accessor: 'id',
      Cell: ({value, row}) => (<EditTrainingParticipant trainingParticipant={row} id={value} updateTrainingParticipant={this.updateTrainingParticipant} fetchTrainingParticipants={this.fetchTrainingParticipants} />),
    }, {
      sortable: false,
      filterable: false,
      width: 40,
      accessor: 'id',
      Cell: ({value}) => (<MdDelete onClick={()=>{this.onDelClick(value)}}>Delete</MdDelete>)
    }]
	
	

    return (
      <div className="App">
        <AddTrainingParticipant addTrainingParticipant={this.addTrainingParticipant} fetchTrainingParticipants={this.fetchTrainingParticipants} />
        <ReactTable data={this.state.trainingParticipants} columns={columns} filterable={true}/>
        <ToastContainer autoClose={1500} /> 
      </div>	  
    );
  }  

}



export default TrainingParticipants;

