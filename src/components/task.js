import React from 'react';
import '../task.css';

const Task = function(props) {
  const { task, onComplete, onDue, onProcess } = props;
  const { id, content, status } = task;
  const { isCompleted, inProcess } = status;
  let onClick = onProcess;
  let taskStatus = 'todo';

  if (inProcess) {
    onClick = onComplete;
    taskStatus = 'processing';
  }

  if (isCompleted) {
    onClick = onDue;
    taskStatus = 'completed';
  }

  return (
    <div className={`taskContainer ${taskStatus}`} onClick={() => onClick(id)}>
      <div className="taskIcon"></div>
      <p className="taskContent">{content}</p>
    </div>
  );
};

export default Task;
