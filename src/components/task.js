import React from 'react';
import '../task.css';

const Task = function(props) {
  const { id, content, status } = props.task;
  return (
    <div className={`taskContainer ${status}`}>
      <div className="taskIcon"></div>
      <div className="taskContent">
        <p onClick={() => props.onClick(id)}>{content}</p>
        <span className="deleteTaskBtn" onClick={() => props.onDelete(id)}>
          X
        </span>
      </div>
    </div>
  );
};

export default Task;
