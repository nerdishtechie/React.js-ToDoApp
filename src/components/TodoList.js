import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Task from './Task';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    if (text.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <h1 style={{fontSize: '50px'}}>ToDo App</h1>
      <TodoForm addTask={addTask} />
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('active')}>Active</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} toggleTask={toggleTask} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
