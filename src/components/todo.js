import React from 'react';
import TextInput from './textInput';
import TaskList from './taskList';
import { getDefaultStatus, getNextStatus } from './status';
import TodoTitle from './todoTitle';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Todo', tasks: [] };
    this.lastTaskId = 0;
    this.addTask = this.addTask.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  toggleTaskStatus(taskId) {
    this.setState(({ title, tasks }) => {
      const newTasks = tasks.map((task) => ({ ...task }));
      const taskToUpdate = newTasks.find((task) => task.id === taskId);
      taskToUpdate.status = getNextStatus(taskToUpdate.status);
      return { title, tasks: newTasks };
    });
  }

  addTask(content) {
    const taskId = this.lastTaskId + 1;
    this.setState(({ title, tasks }) => ({
      title,
      tasks: tasks.concat({
        id: taskId,
        content,
        status: getDefaultStatus()
      })
    }));
    this.lastTaskId = taskId;
  }

  deleteTask(taskId) {
    this.setState(({ title, tasks }) => ({
      tasks: tasks.filter((task) => task.id !== taskId),
      title
    }));
  }

  updateTitle(title) {
    this.setState((prevState) => ({ ...prevState, title }));
  }

  render() {
    return (
      <div style={{ margin: '10em', width: '20%' }}>
        <TodoTitle value={this.state.title} onChange={this.updateTitle} />
        <TaskList
          tasks={this.state.tasks}
          onClick={this.toggleTaskStatus}
          onDelete={this.deleteTask}
        />
        <br />
        <TextInput onEnterPress={this.addTask} className="taskInput" />
      </div>
    );
  }
}

export default Todo;
