import React, { useEffect, useState } from "react";
import api from "../api/axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const userRes = await api.get("/admin/users");
      const taskRes = await api.get("/admin/tasks");
      setUsers(userRes.data);
      setTasks(taskRes.data);
    } catch (err) {
      console.error(err);
      alert("Access denied or server error");
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    await api.delete(`/admin/users/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Admin Dashboard</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Users */}
        <div>
          <h3 className="text-xl font-semibold mb-2">👤 All Users</h3>
          <div className="border rounded p-3 bg-white shadow-sm">
            {users.map((u) => (
              <div
                key={u._id}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <p className="font-medium">{u.name}</p>
                  <p className="text-sm text-gray-600">{u.email}</p>
                  <p className="text-xs italic text-gray-500">{u.role}</p>
                </div>
               { u.role !== "admin" && (
                              <button
                  onClick={() => deleteUser(u._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              )}
              </div>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div>
          <h3 className="text-xl font-semibold mb-2">📝 All Tasks</h3>
          <div className="border rounded p-3 bg-white shadow-sm">
            {tasks.map((t) => (
              <div
                key={t._id}
                className="border-b py-2 text-sm flex flex-col"
              >
                <span className="font-medium">{t.title}</span>
                <span className="text-gray-600">{t.description}</span>
                <span className="text-xs italic text-gray-500">
                  User: {t.user?.name} ({t.user?.email})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
