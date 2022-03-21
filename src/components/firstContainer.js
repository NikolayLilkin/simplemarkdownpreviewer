import React, {Component} from 'react';
import Toolbar from './Toolbar';
import Textarea from './Textarea';
class Firstcontainer extends Component{
    render(){
        return (<div className='container' id="firstContainer">
                     <div className="row justify-content-center">
                        <Toolbar length="col-6"/>
                        <Textarea/>
                    </div>
                </div>);
    }
}

export default Firstcontainer;