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
        return (<div className='container-fluid'>
        <div className="row justify-content-center">
            <Toolbar text="Preview" length="col-8" />
            <PreviewText/>
        </div>
    </div>);
    }
}

export default Secondcontainer;