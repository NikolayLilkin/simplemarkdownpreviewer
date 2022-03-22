import './App.css';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstcontainer from './components/Firstcontainer';
import Secondcontainer from './components/Secondcontainer';
import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { toggle: state.toggle}
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFirstcontainer: () => dispatch({type: 'toggleFirstcontainer'}),
    toggleSecondcontainer: () => dispatch({type: 'toggleSecondcontainer'}),
    toggleUp: () => dispatch({type:'toggleUp'}),
  }
};


class App extends Component {
  render() {
    console.log(this.props.toggle)
    return(
        <div className="App">
          {this.props.toggle < 1 ? (<div><Firstcontainer height={200} ToggleDown={true}/><Secondcontainer ToggleDown={true}/></div>):
           <Firstcontainer height={'100vh'} ToggleDown={false}/>}          
      </div>
      );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
