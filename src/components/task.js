import React from 'react';
import '../task.css';

const Task = function(props) {
  const { task } = props;
  const taskStatus = task.done ? 'done' : 'todo';
  return (
    <div
      className={`taskContainer ${taskStatus}`}
      onClick={() => props.onClick(task.id)}
    >
      <div className="taskIcon"></div>
      <p className="taskContent">{task.content}</p>
    </div>
  );
};

export default Task;
