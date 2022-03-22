import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const mapStateToProps = (state) => {
    return { toggle: state}
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
                <div id="preview" style={{height: this.props.height, width:"100%"} }>
                    <ReactMarkdown children={this.props.toggle.text} remarkPlugins={[remarkGfm]}/>
                </div>
            </div>    
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PreviewText);