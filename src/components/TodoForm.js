import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };
  const myStyle = {
    textAlign: 'center'

  }
  const oneStyle = {
    borderRadius: '10px',
    height: '20px',
    width: '300px',
    
  }
  const didStyle = {
    borderRadius: '10px',
    height: '25px',
    width: '100px',
    backgroundColor: 'green',
    color: 'white'
  }

  return (
    <form style={myStyle} onSubmit={handleSubmit}>
      <input style={oneStyle}
        type="text"
        placeholder="Add new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button style={didStyle}   type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
