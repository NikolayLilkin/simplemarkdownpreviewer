import React, {Component} from 'react';
import {connect} from 'react-redux';
const mapStateToProps = (state) => {
    return { toggle: state.toggle}
  };
const mapDispatchToProps = (dispatch) => {
    return {
      toggleFirstcontainer: () => dispatch({type: 'toggleFirstcontainer'}),
      toggleSecondcontainer: () => dispatch({type: 'toggleSecondcontainer'}),
      toggleUp: () => dispatch({type:'toggleUp'}),
    }
};

class Textarea extends Component {
    render(){
        return (
            <div className="row justify-content-center" id="smallerPadding">
                <div className="col-6" id="smallerPadding">
                    <textarea id="editor" style={{height: this.props.height}} className="col-6" type="text" defaultValue={this.props.toggle}>
                    </textarea>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Textarea);