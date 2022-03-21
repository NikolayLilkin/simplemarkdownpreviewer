import React, {Component} from 'react';

class Textarea extends Component {
    render(){
        return (
            <div className="row justify-content-center" id="smallerPadding">
                <div className="col-6" id="smallerPadding">
                    <textarea id="editor" style={{height: 200}} className="col-6">
                    </textarea>
                </div>
            </div>
        );
    }
}

export default Textarea;