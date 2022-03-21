import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Firstcontainer from './components/Firstcontainer';
import Secondcontainer from './components/Secondcontainer';
import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
    
    }
  }
  render() {
    return(
        <div className="App">
          <Firstcontainer/>
          <Secondcontainer/>
        </div>
      );
  }
}

export default App;
