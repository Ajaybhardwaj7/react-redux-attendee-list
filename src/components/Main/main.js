
import constants from '../../constants/constants';
import React , {Component} from 'react';


const { ADD_ATTENDEE } = constants;

export default class Main extends Component {

	render() {
		
		return    <div className = 'container'> <h1>Attendee List </h1><br/><FormData addAttendee = {this.props[ADD_ATTENDEE]}></FormData><br/><br/>
		<AttendeeList attendeeList = {this.props.allAttendes}></AttendeeList></div>
	}
};

class FormData extends Component {
	constructor(props) {
		super(props);
		this._bind(['_onSubmitHandler' , '_onPassionChange' , '_onNameChange' ]);
		this.formdata = {};
	}
	_bind (methods) {
		methods.forEach((method) => this[method] = this[method].bind(this))
	}
	
	_onPassionChange (event) {
		this.formdata.passion = event.target.value;
	}
	_onNameChange (event) {
		this.formdata.name = event.target.value;
	}
	_onSubmitHandler() {
	 
		let name =  this.formdata.name;
		
		let passion =  this.formdata.passion;
		
		this.props.addAttendee(name , passion);

		this.refs = {};
	}
	render() {

		return <form ref = 'name1' ><label htmlFor='name'/>Name<br/><input onChange = {this._onNameChange} ref = 'name' type='text' name='name'/><br/><br/>
					 <label htmlFor='passion'/>What are you passionate about?<br/><input onChange = {this._onPassionChange} type='text' name='passion' ref = 'passion'/><br/><br/>
					 <input type='button' value= 'Submit' onClick = {this._onSubmitHandler}/>
			   </form>
	}
};

class AttendeeList extends Component {

	render() {

		var list = this.props.attendeeList.map(function(val){
			return <li className = "attendee" key = {val.id}>  <span> <b>Attendee</b>  <br/> {val.name} <br/>------------<br/> {val.passion} </span></li>
		})
		return <ul className = 'attendees'>{list}</ul>
	}
}