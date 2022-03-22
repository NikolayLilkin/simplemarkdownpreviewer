import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {connect} from 'react-redux';
import reducer from './reducers/reducer';

const store = createStore(reducer); 
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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
