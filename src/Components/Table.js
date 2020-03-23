import React from 'react'
import Button from './Button'
import Row_data from './Row_data';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [],
            task_done: [],
        }
    }

    static getDerivedStateFromProps(props, state) {
        return (
            state = {
                taskName_array: props.taskName_array,
                hasTask: props.testProps
            }
        )
    }

    render() {
        const { task_done, taskName_array, hasTask } = this.state
        console.log("task name in table===>", taskName_array + "                " + hasTask)
        return (
            hasTask
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

        const { taskName_array } = this.state
        var a = taskName_array.indexOf(taskName)
        var upd = prompt("Update the desire task...");
        if (upd == '') {
            alert('Text Field is empty.................')
            upd = prompt("Update the desire task...");
        }
        taskName_array.splice(a, 1, upd);
        this.setState({ taskName_array: taskName_array })
        console.log('update    ' + taskName_array);
    }

    _delete(taskName) {
        const { taskName_array, task_done } = this.state
        var a = taskName_array.indexOf(taskName)
        taskName_array.splice(a, 1);
        console.log('delete' + this.props.taskName_array + "               " + a + '                  ' + taskName);
        if (task_done.includes(taskName)) {
            console.log('taskDone----------' + task_done)
            task_done.splice(this.state.task_done.indexOf(taskName), 1);
            console.log(task_done)
        }
        this.setState({ taskName_array: taskName_array })
    }
    
    done(taskName) {
        const { task_done } = this.state;
        task_done.push(taskName);
        this.setState({ task_done: task_done });
    }
}

export default Table;