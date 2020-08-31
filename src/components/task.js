import React from 'react';
import '../task.css';

const Task = function(props) {
  const { id, content, status } = props.task;
  const { isCompleted, inProcess } = status;
  const onClick = inProcess || isCompleted ? props.onComplete : props.onProcess;
  const taskStatus = inProcess ? 'processing' : isCompleted ? 'completed' : 'todo';
  return (
    <div className={`taskContainer ${taskStatus}`} onClick={() => onClick(id)}>
      <div className="taskIcon"></div>
      <p className="taskContent">{content}</p>
    </div>
  );
};

export default Task;
