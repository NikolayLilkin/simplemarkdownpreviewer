import React, {Component} from 'react';

class Textarea extends Component {
    constructor(props) {
        super(props)
        this.stat = {

        }
    }
    render(){
        return (
            <div class="row justify-content-center" id="smallerPadding">
                <div class="col-6" id="smallerPadding">
                    <textarea id="editor" type="text" style={{height: 200}} class="col-6">
                        Hello my name is
                    </textarea>
                </div>
            </div>
        );
    }
}

export default Textarea;