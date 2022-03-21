import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstcontainer from './components/Firstcontainer';
import Secondcontainer from './components/Secondcontainer';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import reducer from './reducers/reducer';


const ContextA = React.createContext();
const store = createStore(reducer); 
const mapStateToProps = (state) => {
  return { toggle: state.toggle}
};
const mapDispatchToProps = (dispatch) => {
  return {
    toggleFirstcontainer: () => dispatch({type: 'toggleFirstcontainer'}),
    toggleSecondcontainer: () => dispatch({type: 'toggleSecondcontainer'}),
    toggleUp: () => dispatch({type:'toggleUp'})
  }
};


class Presentational extends Component{
  render(){
    return (
      <div className="App">
          <Firstcontainer/>
          <Secondcontainer/>
      </div>
    );
  }
}
console.log("connecting");
const Container = connect(mapStateToProps,mapDispatchToProps)(Presentational);
class App extends Component {
  render() {
    return(
      <Provider context={ContextA} store={store}>
        <Container context={ContextA} store={store}/>
      </Provider>
      );
  }
}
console.log(store.getState());
export default App;
