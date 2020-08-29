import React from 'react';
import '../task.css';

const Task = function(props) {
  const { task } = props;
  const stylename = task.done ? 'done' : 'todo';
  return (
    <div
      key={task.id}
      className={`taskContainer ${stylename}`}
      onClick={() => props.onClick(task.id)}
    >
      <div className="taskIcon"></div>
      <p className="taskContent">{task.name}</p>
    </div>
  );
};

export default Task;
