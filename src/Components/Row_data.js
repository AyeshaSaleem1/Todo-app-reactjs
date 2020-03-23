import React from 'react'


class Row_data extends React.Component {
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
        return (
            state = {
                task_done: props.task_done,
                task: props.task
            }
        )
    }

    render() {
        const { task_done, task } = this.state;
        return (
            task_done.includes(task) ? (<td id="td1" ><s>{task}</s></td>) : (<td id="td1" >{task}</td>)
        );

    }
}


export default Row_data





