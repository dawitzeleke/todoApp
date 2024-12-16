import React from "react";
import { FiTrash2, FiCheckCircle } from "react-icons/fi";

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const handleComplete = () => {
    onUpdateTask(task._id, { status: !task.status });
  };

  const handleDelete = () => {
    onDeleteTask(task._id);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg flex justify-between items-center hover:shadow-2xl transition">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{task.todoTitle}</h3>
        <p className="text-gray-600">{task.todoDescription}</p>
      </div>

      <div className="flex items-center space-x-4">
        <button onClick={handleComplete} className="text-green-500 hover:text-green-700">
          <FiCheckCircle size={24} />
        </button>
        <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
          <FiTrash2 size={24} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
