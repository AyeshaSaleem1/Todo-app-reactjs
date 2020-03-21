import React from 'react';
import './App.css';
import SearchBar from './Components/Search_Component';
import _Button from './Components/Button';
import Heading from './Components/Heading';
import Table from './Components/Table';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      taskName_array: '',
      isClicked: false
    }
  }

  test = (param) => {
    console.log("params ki value ====>", param)
    this.setState({ taskName_array: param })
    this.state.isClicked = true;
  }


  render() {
    const { taskName_array } = this.state
    return (
      <div className="App">
        <Heading />
        <SearchBar testFun={this.test.bind(this)} />
        <Table testProps={this.state.isClicked} taskName_array={taskName_array} />



      </div>


    );
  }
}

export default App;