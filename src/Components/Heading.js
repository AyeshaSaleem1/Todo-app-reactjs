import React from 'react';
import './cssStyle.css';
class Heading extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {name:"TODO Application"};
    }


    render()
    {
        return(
            <div id="div1">
            <h1>
     "TODO Application"

            </h1>
        </div>
        );
    }
}

export default Heading