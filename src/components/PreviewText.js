import React, {Component} from 'react';

class PreviewText extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="col-8" id="previewText">
                <div id="preview">
                    <h1>My name is Nikolay</h1>
                </div>
            </div>    
        );
    }
}

export default PreviewText;