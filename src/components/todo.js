import React from 'react';
import TextInput from './textInput';
import TaskList from './taskList';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.addTask = this.addTask.bind(this);
    this.updateTaskStatus = this.updateTaskStatus.bind(this);
  }

  updateTaskStatus(taskId) {
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
    return (
      <div style={{ margin: '10em' }}>
        <h3>TODO</h3>
        <TaskList tasks={this.state.tasks} onClick={this.updateTaskStatus} />
        <br />
        <TextInput onEnterPress={this.addTask} />
      </div>
    );
  }
}

export default Todo;
