import React from 'react';
import TaskList from "../TaskList/TaskList.js";

import "./Main.css";

class Main extends React.Component {
    render() {
      return( 
        <div className= "MyToDoList">
          <TaskList>
          </TaskList>
        </div>
      )
    }
  }

  export default Main;
