import React, { useEffect, useState } from "react";
import api from "../api/axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const [editTaskId, setEditTaskId] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // Handle input change
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Add or update task
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    try {
      if (editTaskId) {
        await api.put(`/tasks/${editTaskId}`, form);
        setEditTaskId(null);
      } else {
        await api.post("/tasks", form);
      }
      setForm({ title: "", description: "" });
      fetchTasks();
    } catch (err) {
      console.error("Error saving task:", err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  // Toggle completion
  const toggleComplete = async (id, completed) => {
    await api.put(`/tasks/${id}`, { completed: !completed });
    fetchTasks();
  };

  // Start editing
  const startEdit = (task) => {
    setForm({ title: task.title, description: task.description || "" });
    setEditTaskId(task._id);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl mb-4 font-bold">Dashboard</h2>

      {/* Add / Edit Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Task title"
          className="border px-2 py-1 rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Task description"
          className="border px-2 py-1 rounded resize-none"
          rows="2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
        >
          {editTaskId ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* Task List */}
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="bg-gray-100 p-3 rounded flex justify-between items-start"
          >
            <div className="flex-1">
              <h3
                className={`font-semibold text-lg ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.title}
              </h3>
              {task.description && (
                <p className="text-gray-700 text-sm">{task.description}</p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toggleComplete(task._id, task.completed)}
                className={`${
                  task.completed ? "bg-yellow-400" : "bg-green-500"
                } text-white px-2 py-1 rounded text-sm`}
              >
                {task.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={() => startEdit(task)}
                className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
