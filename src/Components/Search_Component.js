import React from 'react';
import './cssStyle.css';
import Button from './Button'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskName: '',
            rows: []
        };

    }

    render() {

        return (
            <div class="row form-group" id="div_1" >
                <input type="text" class="form-control" id="task" onChange={this._SaveName.bind(this)} />
                <Button _recName={this.addToTable.bind(this)} buttonName='ADD' />
            </div>
        );
    }

    addRow = () => {
    
        if (document.getElementById('task').value != '') {
            var rows = this.state.rows
            if (!rows.includes(this.state.taskName)) {
                rows.push(this.state.taskName)
                this.setState({ rows: rows })
            }
            else {
                alert("This task is already exist...........");
            }
        }
        else {
            alert("Text Field is empty...")
        }

    }
    addToTable() {
        this.addRow();
        this.props.testFun(this.state.rows);
        document.getElementById('task').value = '';
        console.log("search ===>" + this.state.rows + "         ");
    }

    _SaveName = (event) => {
        let val = event.target.value;
        this.setState({ taskName: event.target.value });        //, ()=> console.log(this.state.taskName));

    }
}
export default SearchBar;