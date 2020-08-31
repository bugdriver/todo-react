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
    this.toggleTaskCompleteStatus = this.toggleTaskCompleteStatus.bind(this);
    this.markTaskInProgress = this.markTaskInProgress.bind(this);
  }

  toggleTaskCompleteStatus(taskId) {
    this.setState(({ tasks }) => {
      const newTasks = tasks.map((task) => ({ ...task }));
      const taskToUpdate = newTasks.find((task) => task.id === taskId);
      taskToUpdate.status = {
        inProcess: false,
        isCompleted: !taskToUpdate.status.isCompleted
      };
      return { tasks: newTasks };
    });
  }

  markTaskInProgress(taskId) {
    this.setState(({ tasks }) => {
      const newTasks = tasks.map((task) => ({ ...task }));
      const taskToUpdate = newTasks.find((task) => task.id === taskId);
      taskToUpdate.status = {
        inProcess: true,
        isCompleted: false
      };
      return { tasks: newTasks };
    });
  }

  addTask(content) {
    this.setState(({ tasks }) => {
      const newTasks = tasks.slice();
      const newTask = {
        id: tasks.length + 1,
        content,
        status: { isCompleted: false, inProcess: false }
      };
      newTasks.push(newTask);
      return { tasks: newTasks };
    });
  }

  render() {
    return (
      <div style={{ margin: '10em' }}>
        <h3>TODO</h3>
        <TaskList
          tasks={this.state.tasks}
          onComplete={this.toggleTaskCompleteStatus}
          onProcess={this.markTaskInProgress}
        />
        <br />
        <TextInput onEnterPress={this.addTask} />
      </div>
    );
  }
}

export default Todo;
