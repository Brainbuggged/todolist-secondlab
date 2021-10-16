import React, {useState} from 'react';
import Task from "../Task/Task.js";
import AddTask from "../AddTask/AddTask.js";
import './TaskList.css';

class TaskList extends React.Component{
    state = {
      tasks: [{id:'1',name:'Сделать ДЗ',description:'Написать калькулятор',completed:true},
          {id:'2',name:'Приготовить обед',description:'Овощи,рагу, компот',completed:true},
          {id:'3',name:'Погулять с собакой',description:'Не забыть поводок',completed:false},
          {id:'4',name:'Сходить в кино',description:'Сеанс в 19:30',completed:true},
          {id:'5',name:'Сыграть в маджонг',description:'Необходимо победить',completed:true}
          ]
          
    }
    
    callbackFunction = (childName,childDescription) => {
      this.setState({
        tasks: [... this.state.tasks, {id:this.checkId(),name:childName,description:childDescription}]
      });
      console.log(childName + " " + childDescription);
    }

    checkId()
    {
      return this.state.tasks[this.state.tasks.length-1];
    }

    render(){
      return (
       <div className="TodoList">
        {this.state.tasks.map(item => (
            <Task id={item.id} name={item.name} description={item.description}  completed={item.completed}>
            </Task>
        ))}
        <AddTask taskListCallback = {this.callbackFunction}>
        </AddTask>
        </div>
      )
    }
  }

  export default TaskList;