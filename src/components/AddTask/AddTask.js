import React, { useState }from 'react';

import './AddTask.css';


class AddTask extends React.Component{sendData = () =>{
  if (this.state.name != "" && this.state.description  != "")
  {
    this.props.taskListCallback(this.state.name,this.state.description);
  }
  else{
    alert("Введите название и описание!");
  }
 }

  constructor() {
    super();
    this.state = {
      name: "",
      description: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
  render(){
    return(
    <div className="AddTask">
      <label>
        Название:
        <input type="text" name="name" value={this.state.name} onChange={ this.handleChange } />
      </label>
      <label>
        Описание:
      <input type="text" name="description" value={this.state.description} onChange={ this.handleChange } />
      </label>
      <input type="submit" name="add" value="Создать" onClick={this.sendData}/>
    </div>
    )
  }
}

export default AddTask;