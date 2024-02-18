import React from 'react';

function Task({ task, toggleTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
    </li>
  );
}

export default Task;
