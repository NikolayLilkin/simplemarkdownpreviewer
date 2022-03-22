import React, {Component} from 'react';
import Toolbar from './Toolbar';
import Textarea from './Textarea';
class Firstcontainer extends Component{
    render(){
        console.log(this.props.height);
        return (<div className='container' id="firstContainer">
                     <div className="row justify-content-center">
                        <Toolbar text="Editor" length="col-6" toggleIcon={this.props.ToggleDown}/>
                        <Textarea text="Hello World" height={this.props.height}/>
                    </div>
                </div>);
    }
}

export default Firstcontainer;