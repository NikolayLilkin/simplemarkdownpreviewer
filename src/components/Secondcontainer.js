import React, {Component} from 'react';
import Toolbar from './Toolbar'
import PreviewText from './PreviewText';

class Secondcontainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (<div class='container-fluid'>
        <div class="row justify-content-center">
            <Toolbar text="Preview"/>
            <PreviewText/>
        </div>
    </div>);
    }
}

export default Secondcontainer;