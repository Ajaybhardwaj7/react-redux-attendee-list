import constants from '../constants/constants';

export default  function(state  , action){

	switch(action.type) {

		case constants.ADD_ATTENDEE : {
			return [
				{   id : action.id,
					name : action.name,
					passion : action.passion
				},

				...state
			]
			break;
		}
	   default : return state
	}
}