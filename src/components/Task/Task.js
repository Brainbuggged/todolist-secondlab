import React from 'react';
import './Task.css';


class Task extends React.Component{
    constructor(props){
      super(props);
      this.changeStatus = this.changeStatus.bind(this);
      this.state = {
        completed: this.props.completed
   }
  }
    
    changeStatus(){
      this.setState({completed:!this.state.completed})
    }
  
    render() {
      let taskClass = this.state.completed ? "completedTask" : "unCompletedTask";
      let taskDone = this.state.completed ? "Выполнено" : "Не выполнено";
      let changeStatusTask = this.state.completed ? "Отменить" : "Выполнить";
  
      return( 
        <div className="Task">
        <div className={taskClass}>
          <h3>{this.props.name} </h3>
          <p>{this.props.description}  </p>
          <p>{taskDone}</p>
          <button onClick={() => this.changeStatus(this)}>
          {changeStatusTask}
        </button>
        </div>
        </div>
      )
    }
  }

export default Task;