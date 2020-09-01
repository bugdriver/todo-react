import React from 'react';
import TextInput from './textInput';
import TaskList from './taskList';
import { getDefaultStatus, getNextStatus } from './status';
import TodoTitle from './todoTitle';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Todo', tasks: [] };
    this.addTask = this.addTask.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  toggleTaskStatus(taskId) {
    this.setState(({ tasks }) => {
      const newTasks = tasks.map((task) => ({ ...task }));
      const taskToUpdate = newTasks.find((task) => task.id === taskId);
      taskToUpdate.status = getNextStatus(taskToUpdate.status);
      return { tasks: newTasks };
    });
  }

  addTask(content) {
    this.setState(({ tasks }) => ({
      tasks: tasks.concat({
        id: tasks.length + 1,
        content,
        status: getDefaultStatus()
      })
    }));
  }

  updateTitle(title) {
    this.setState((prevState) => ({ ...prevState, title }));
  }

  render() {
    return (
      <div style={{ margin: '10em', width: '20%' }}>
        <TodoTitle value={this.state.title} onChange={this.updateTitle} />
        <TaskList tasks={this.state.tasks} onClick={this.toggleTaskStatus} />
        <br />
        <TextInput onEnterPress={this.addTask} className="taskInput" />
      </div>
    );
  }
}

export default Todo;
