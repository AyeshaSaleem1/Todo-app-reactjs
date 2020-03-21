import React from 'react';
import './cssStyle.css';

function Button(props) {


        return (
                props.buttonName == 'Delete' ? (<button id="b1" class="btn btn-danger" onClick={props._recName}> {props.buttonName} </button>) :
                props.buttonName == 'Done' ? (<button id="b1" class="btn btn-primary" onClick={props._recName}> {props.buttonName} </button>)  :
                        (<button id="b1" class="btn btn-success" onClick={props._recName}> {props.buttonName} </button>)
        );


}

export default Button;