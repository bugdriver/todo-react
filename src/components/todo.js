import React from 'react';
import Task from './task';
import TextInput from './textInput';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  updateTask(taskId) {
    this.setState(({ tasks }) => {
      const newTasks = tasks.map((task) => ({ ...task }));
      const taskToUpdate = newTasks.find((task) => task.id === taskId);
      taskToUpdate.done = !taskToUpdate.done;
      return { tasks: newTasks };
    });
  }

  addTask(content) {
    this.setState(({ tasks }) => {
      const newTasks = tasks.slice();
      const newTask = { id: tasks.length + 1, content, done: false };
      newTasks.push(newTask);
      return { tasks: newTasks };
    });
  }

  render() {
    const taskList = this.state.tasks.map((task) => {
      return <Task task={task} key={task.id} onClick={this.updateTask} />;
    });
    return (
      <div style={{ margin: '10em' }}>
        <h3>TODO</h3>
        {taskList}
        <br />
        <TextInput onEnterPress={this.addTask} />
      </div>
    );
  }
}

export default Todo;
