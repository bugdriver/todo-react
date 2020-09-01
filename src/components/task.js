import React from 'react';
import '../task.css';

const Task = function(props) {
  const { id, content, status } = props.task;
  return (
    <div
      className={`taskContainer ${status}`}
      onClick={() => props.onClick(id)}
    >
      <div className="taskIcon"></div>
      <p className="taskContent">{content}</p>
    </div>
  );
};

export default Task;
