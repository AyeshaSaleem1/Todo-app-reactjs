import React from 'react'
import Button from './Button'
import SearchBar from './Search_Component';
import Row_data from './Row_data';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            task_done: [],
            taskName_array: [],
        };
    }
    render() {
        const { task_done, taskName_array } = this.state
        console.log("task name in table===>", this.state.taskName_array + "                " + this.props.testProps)
        return (
            this.props.testProps
            &&
            (
                <div id="d1">
                    <table id='ul1'>

                        {this.props.taskName_array.map((r) => (
                            <tr>
                                <Row_data task={r} task_done={this.state.task_done} />
                                <td><Button _recName={() => this.update(r)} buttonName='Update' /></td>
                                <td><Button _recName={() => this._delete(r)} buttonName='Delete' /></td>
                                <td><Button _recName={() => this.done(r)} buttonName='Done' /></td>
                            </tr>
                        ))}

                    </table>
                </div>
            )
        );
    }
    update(taskName) {

        var a = this.props.taskName_array.indexOf(taskName)
        var upd = prompt("Update the desire task...");
        if (upd == '') {
            alert('Text Field is empty.................')
        }
        upd = prompt("Update the desire task...");
        this.props.taskName_array.splice(a, 1, upd);
        this.setState({ taskName_array: this.props.taskName_array })
        console.log('update    ' + this.props.taskName_array);

    }

    _delete(taskName) {

        var a = this.props.taskName_array.indexOf(taskName)
        console.log('delete' + this.props.taskName_array + "               " + a + '                  ' + taskName);
        this.props.taskName_array.splice(a, 1);
        if (this.state.task_done.includes(taskName)) {
            console.log(this.state.task_done)
            this.state.task_done.splice(this.state.task_done.indexOf(taskName), 1);
            console.log(this.state.task_done)
            this.setState({ taskName_array: this.props.taskName_array })
        }
    }
    done(taskName) {
        this.state.task_done.push(taskName);
        this.setState({ task_done: this.state.task_done });
    }
}

export default Table;