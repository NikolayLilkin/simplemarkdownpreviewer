import React, {Component} from 'react';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
    return { toggle: state}
};
  
const mapDispatchToProps = (dispatch) => {
    return {
      toggleFirstcontainer: () => dispatch({type: 'toggleFirstcontainer'}),
      toggleSecondcontainer: () => dispatch({type: 'toggleSecondcontainer'}),
      toggleUp: () => dispatch({type:'toggleUp'}),
      addText: (text) => dispatch({type:'addText', payload: text})
    }
};

class Textarea extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.addText(event.target.value);
    }
    render(){
        return (
            <div className="row justify-content-center" id="smallerPadding">
                <div className="col-6" id="smallerPadding">
                    <textarea id="editor" style={{height: this.props.height}} className="col-6" type="text" value={this.props.toggle.text} onChange={this.handleChange}>
                    </textarea>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Textarea);