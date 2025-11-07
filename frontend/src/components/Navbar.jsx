import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await api.post("/auth/logout");
    setUser(null);
    alert("logout successfully")
    navigate("/");
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-600 text-white">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <div>
        {user ? (
          <div className="flex gap-10">
          <h1>hii {user?.name}</h1>
          <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </div>
        ) : (
          <Link to="/register" className="bg-blue-500 px-3 py-1 rounded">Register</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
