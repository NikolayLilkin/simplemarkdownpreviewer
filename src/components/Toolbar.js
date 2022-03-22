import React, {Component} from 'react';
import {connect} from 'react-redux';

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

class Toolbar extends Component {
    constructor(props){
        super(props);
        this.toggle=this.toggle.bind(this);
        this.toggleIn=this.toggleIn.bind(this);
    }
    toggleIn(event){
        event.preventDefault();
        this.props.toggleUp();
    }

    toggle(event){
        event.preventDefault();
        if(this.props.buttonNumber===1){
            this.props.toggleFirstcontainer();
        }
        else{
            this.props.toggleSecondcontainer();
        }
    }
    render (){
        return (
            <div className={this.props.length} id="toolbar">
                <div className="col-11">
                    <img src="https://gists.rawgit.com/Deftwun/e3756a8b518cbb354425/raw/6584db8babd6cbc4ecb35ed36f0d184a506b979e/free-code-camp-logo.svg" width="20.58" height="16" className="image" alt="qjte mi kura"/>
                    {this.props.text}   
                </div>
                { this.props.toggleIcon ?
                <div className="col-1 d-flex justify-content-end" id="arrow">
                    <button className="btn" onClick={this.toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-move" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"/>
                    </svg>
                    </button>
                </div>
                :
                <div className="col-1 d-flex justify-content-end" id="arrow">
                    <button className="btn" onClick={this.toggleIn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"/>
                    </svg>
                    </button>
                </div>}
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Toolbar);