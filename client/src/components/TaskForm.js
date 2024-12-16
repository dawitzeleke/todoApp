import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoTitle.trim() || !todoDescription.trim()) return;
    onAddTask({ todoTitle, todoDescription, status: false });
    setTodoTitle("");
    setTodoDescription("");
  };

  return (
    <div className="bg-[#AFA9DD] min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Add Task
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#AFA9DD]"
        />
        <textarea
          placeholder="Detail"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
          rows="3"
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#AFA9DD]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#AFA9DD] text-white font-semibold py-2 rounded-lg hover:bg-[#8D85C7] transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
