import React, {Component} from 'react';
class PreviewText extends Component {
    render() {
        return (
            <div className="col-8" id="previewText">
                <div id="preview" style={{height: this.props.height}}>
                    <h1>{this.props.text}</h1>
                </div>
            </div>    
        );
    }
}

export default (PreviewText);