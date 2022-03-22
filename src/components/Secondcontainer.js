import React, {Component} from 'react';
import Toolbar from './Toolbar'
import PreviewText from './PreviewText';

class Secondcontainer extends Component{
    render(){
        return (<div className='container-fluid'>
        <div className="row justify-content-center">
            <Toolbar text="Preview" length="col-8" toggleIcon={this.props.ToggleDown} buttonNumber={2}/>
            <PreviewText height={this.props.height}/>
        </div>
    </div>);
    }
}

export default Secondcontainer;