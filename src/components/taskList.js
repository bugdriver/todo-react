import React from 'react';
import Task from './task';

const TaskList = function(props) {
  const { tasks } = props;
  const taskList = tasks.map((task) => {
    return (
      <Task
        task={task}
        key={task.id}
        onComplete={props.onComplete}
        onProcess={props.onProcess}
      />
    );
  });
  return <div>{taskList}</div>;
};

export default TaskList;
