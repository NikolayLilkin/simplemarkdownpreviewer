import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstcontainer from './components/Firstcontainer';
import Secondcontainer from './components/Secondcontainer';
import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return { toggle: state}
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
    return(
        <div className="App">
          {(this.props.toggle.toggle === 0) ? (<div><Firstcontainer height={200} ToggleDown={true}/><Secondcontainer ToggleDown={true}/></div>):
           (this.props.toggle.toggle === 1) ? (<Firstcontainer height={'100vh'} ToggleDown={false}/>):
           (<Secondcontainer height={'100vh'} ToggleDown={false}/>)}        
      </div>
      );
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
