import constants from '../constants/constants';
import uuid from 'node-uuid';
	

var actionCreators = {};

//Defining actions
actionCreators[constants.ADD_ATTENDEE] =  function(name , passion){
										return {
											name : name,
											id :  uuid.v4(),
											passion : passion,
											type : constants.ADD_ATTENDEE
										}
							}

export default actionCreators;