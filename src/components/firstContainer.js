import React, {Component} from 'react';
import Toolbar from './Toolbar';
import Textarea from './Textarea';
class Firstcontainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (<div class='container'>
            <div class="row justify-content-center">
                <Toolbar text="Editor" length="col-6"/>
                <Textarea/>
            </div>
        </div>);
    }
}

export default Firstcontainer;