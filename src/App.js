import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstcontainer from './components/Firstcontainer';
import Secondcontainer from './components/Secondcontainer';
import React, {Component} from 'react';
import {connect} from 'react-redux';
const initialState = {
  toggle: 0,
};
const reducer = (state = initialState,action) => {
  switch (action.type) {
      case "toggleFirstcontainer":
          return {
              toggle: 1
          };
      case "toggleSecondcontainer":
          return {
              toggle: 2
          };
      case "toggleUp":
          return {
              toggle: 0
          };       
      default:
          return state;
  }
};
const store = createStore(reducer); 
const mapStateToProps = (state) => {
  return { state: state.toggle}
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleFirstcontainer: () => dispatch({type: 'toggleFirstcontainer'}),
    toggleSecondcontainer: () => dispatch({type: 'toggleSecondcontainer'}),
    toggleUp: () => dispatch({type:'toggleUp'})
  }
};
class Presentational extends Component{
  constructor(props) {
    super(props);
    this.state = {
      toggle: 0
    }
  }
  render(){
    return (
      <div className="App">
          <Firstcontainer/>
          <Secondcontainer/>
      </div>
    );
  }
}
const Container = connect(mapStateToProps,mapDispatchToProps)(Presentational);
class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Container/>
      </Provider>
      );
  }
}
export default App;
