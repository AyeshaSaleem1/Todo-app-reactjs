import React from 'react'


class Row_data extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
return(
   
       this.props.task_done.includes(this.props.task ) ? (<td id="td1" ><s>{this.props.task}</s></td>) : (<td id="td1" >{this.props.task}</td>)
    );
        
 }}


export default Row_data





   