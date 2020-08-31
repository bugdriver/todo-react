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
    this.markTaskAsDue = this.markTaskAsDue.bind(this);
    this.markTaskAsCompleted = this.markTaskAsCompleted.bind(this);
    this.markTaskInProgress = this.markTaskInProgress.bind(this);
  }

  updateTaskStatus(taskId, status) {
    this.setState(({ tasks }) => {
      const newTasks = tasks.map((task) => ({ ...task }));
      const taskToUpdate = newTasks.find((task) => task.id === taskId);
      taskToUpdate.status = status;
      return { tasks: newTasks };
    });
  }

  markTaskAsDue(taskId) {
    this.updateTaskStatus(taskId, { isCompleted: false, inProcess: false });
  }

  markTaskAsCompleted(taskId) {
    this.updateTaskStatus(taskId, { isCompleted: true, inProcess: false });
  }

  markTaskInProgress(taskId) {
    this.updateTaskStatus(taskId, { inCompleted: false, inProcess: true });
  }

  addTask(content) {
    this.setState(({ tasks }) => {
      const newTasks = tasks.slice();
      const status = { isCompleted: false, inProcess: false };
      const newTask = { id: tasks.length + 1, content, status };
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
          onComplete={this.markTaskAsCompleted}
          onProcess={this.markTaskInProgress}
          onDue={this.markTaskAsDue}
        />
        <br />
        <TextInput onEnterPress={this.addTask} />
      </div>
    );
  }
}

export default Todo;
