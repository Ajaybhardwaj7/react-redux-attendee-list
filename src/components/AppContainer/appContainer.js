
import  {connect } from 'react-redux';
import  {createStore , bindActionCreators} from 'redux';
import  actionCreators from '../../action/action';
import  reducer from '../../reducer/reducer';
import  constants , {initialData} from '../../constants/constants';
import  Main from '../Main/main';


export const AppContainer = connect(
								function mapStateToProps(state){
									
									return {

										allAttendes : state
									}
								},
								function mapDispatchToProps(dispatch){
									return bindActionCreators(actionCreators , dispatch);
								}	
						)(Main);


export const store =  createStore(reducer , initialData);