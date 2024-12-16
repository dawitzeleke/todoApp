import React, { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from './api.js';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './index.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    const newTask = await addTask(taskData);
    setTasks([...tasks, newTask]);
  };

  const handleUpdateTask = async (id, updatedTaskData) => {
    const updatedTask = await updateTask(id, updatedTaskData);
    setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks} 
        onUpdateTask={handleUpdateTask} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
};

export default App;
