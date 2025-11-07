import React, { useContext, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const e = await api.post("/auth/login", form);
            console.log(e);



            const res = await api.post("/auth/login", form);
            setUser(res.data.user);
            if (res.data.user.role === "admin") {
                navigate("/admin-dashboard");
            } else {
                navigate("/dashboard");
            }

        } catch (err) {
            setMessage(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="flex flex-col items-center mt-10 p-5">
            <h2 className="text-2xl mb-4 font-bold">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col rounded-xl shadow-xl p-5 gap-3 max-w-md w-full bg-white">
                <input className="outline-none border border-gray-300 rounded-lg p-2" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input className="outline-none border border-gray-300 rounded-lg p-2" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                <button className="bg-green-600 text-white p-2 active:scale-95 rounded">Login</button>
            </form>
            <p className="mt-3 text-sm text-gray-600">{message}</p>
        </div>
    );
};

export default Login;
