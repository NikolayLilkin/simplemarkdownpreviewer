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

class PreviewText extends Component {
    render() {
        return (
            <div className="col-8" id="previewText">
                <div id="preview">
                    <h1>{this.props.text}</h1>
                </div>
            </div>    
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PreviewText);